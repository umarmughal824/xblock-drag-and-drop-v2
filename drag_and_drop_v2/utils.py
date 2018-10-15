# -*- coding: utf-8 -*-
""" Drag and Drop v2 XBlock - Utils """
import copy
from collections import namedtuple


def _(text):
    """ Dummy `gettext` replacement to make string extraction tools scrape strings marked for translation """
    return text


def ngettext_fallback(text_singular, text_plural, number):
    """ Dummy `ngettext` replacement to make string extraction tools scrape strings marked for translation """
    if number == 1:
        return text_singular
    else:
        return text_plural


class DummyTranslationService(object):
    """
    Dummy drop-in replacement for i18n XBlock service
    """
    gettext = _
    ngettext = ngettext_fallback


class FeedbackMessages(object):
    """
    Feedback messages collection
    """
    class MessageClasses(object):
        """
        Namespace for message classes
        """
        CORRECT_SOLUTION = "correct"
        PARTIAL_SOLUTION = "partial"
        INCORRECT_SOLUTION = "incorrect"

        CORRECTLY_PLACED = CORRECT_SOLUTION
        MISPLACED = INCORRECT_SOLUTION
        NOT_PLACED = INCORRECT_SOLUTION

    GRADE_FEEDBACK_TPL = _('Your highest score is {score}')
    FINAL_ATTEMPT_TPL = _('Final attempt was used, highest score is {score}')

    @staticmethod
    def correctly_placed(number, ngettext=ngettext_fallback):
        """
        Formats "correctly placed items" message
        """
        return ngettext(
            'Correctly placed {correct_count} item.',
            'Correctly placed {correct_count} items.',
            number
        ).format(correct_count=number)

    @staticmethod
    def misplaced(number, ngettext=ngettext_fallback):
        """
        Formats "misplaced items" message
        """
        return ngettext(
            'Misplaced {misplaced_count} item.',
            'Misplaced {misplaced_count} items.',
            number
        ).format(misplaced_count=number)

    @staticmethod
    def misplaced_returned(number, ngettext=ngettext_fallback):
        """
        Formats "misplaced items returned to bank" message
        """
        return ngettext(
            'Misplaced {misplaced_count} item. Misplaced item was returned to item bank.',
            'Misplaced {misplaced_count} items. Misplaced items were returned to item bank.',
            number
        ).format(misplaced_count=number)

    @staticmethod
    def not_placed(number, ngettext=ngettext_fallback):
        """
        Formats "did not place required items" message
        """
        return ngettext(
            'Did not place {missing_count} required item.',
            'Did not place {missing_count} required items.',
            number
        ).format(missing_count=number)


FeedbackMessage = namedtuple("FeedbackMessage", ["message", "message_class"])  # pylint: disable=invalid-name
ItemStats = namedtuple(  # pylint: disable=invalid-name
    'ItemStats',
    ["required", "placed", "correctly_placed", "decoy", "decoy_in_bank"]
)


class Constants(object):
    """
    Namespace class for various constants
    """
    ALLOWED_ZONE_ALIGNMENTS = ['left', 'right', 'center']
    DEFAULT_ZONE_ALIGNMENT = 'center'

    STANDARD_MODE = "standard"
    ASSESSMENT_MODE = "assessment"

    FIXED_SIZING = "fixed_sizing"
    FREE_SIZING = "free_sizing"

    RECTANGLE_ITEM_CHARACTER_LIMIT = 50
    SQUARE_ITEM_CHARACTER_LIMIT = 110


class StateMigration(object):
    """
    Helper class to apply zone data and item state migrations
    """
    def __init__(self, block):
        self._block = block

    @staticmethod
    def _apply_migration(obj_id, obj, migrations):
        """
        Applies migrations sequentially to a copy of an `obj`, to avoid updating actual data
        """
        tmp = copy.deepcopy(obj)
        for method in migrations:
            tmp = method(obj_id, tmp)

        return tmp

    def apply_zone_migrations(self, zone):
        """
        Applies zone migrations
        """
        migrations = (self._zone_v1_to_v2, self._zone_v2_to_v2p1)
        zone_id = zone.get('uid', zone.get('id'))

        return self._apply_migration(zone_id, zone, migrations)

    def apply_item_state_migrations(self, item_id, item_state):
        """
        Applies item_state migrations
        """
        migrations = (self._item_state_v1_to_v1p5, self._item_state_v1p5_to_v2, self._item_state_v2_to_v2p1)

        return self._apply_migration(item_id, item_state, migrations)

    @classmethod
    def _zone_v1_to_v2(cls, unused_zone_id, zone):
        """
        Migrates zone data from v1.0 format to v2.0 format.

        Changes:
        * v1 used zone "title" as UID, while v2 zone has dedicated "uid" property
        * "id" and "index" properties are no longer used

        In: {'id': 1, 'index': 2, 'title': "Zone", ...}
        Out: {'uid': "Zone", ...}
        """
        if "uid" not in zone:
            zone["uid"] = zone.get("title")
        zone.pop("id", None)
        zone.pop("index", None)

        return zone

    @classmethod
    def _zone_v2_to_v2p1(cls, unused_zone_id, zone):
        """
        Migrates zone data from v2.0 to v2.1

        Changes:
        * Removed "none" zone alignment; default align is "center"

        In: {
            'uid': "Zone", "align": "none",
            "x_percent": "10%", "y_percent": "10%", "width_percent": "10%", "height_percent": "10%"
        }
        Out: {
            'uid': "Zone", "align": "center",
            "x_percent": "10%", "y_percent": "10%", "width_percent": "10%", "height_percent": "10%"
        }
        """
        if zone.get('align', None) not in Constants.ALLOWED_ZONE_ALIGNMENTS:
            zone['align'] = Constants.DEFAULT_ZONE_ALIGNMENT

        return zone

    @classmethod
    def _item_state_v1_to_v1p5(cls, unused_item_id, item):
        """
        Migrates item_state from v1.0 to v1.5

        Changes:
        * Item state is now a dict instead of tuple

        In: ('100px', '120px')
        Out: {'top': '100px', 'left': '120px'}
        """
        if isinstance(item, dict):
            return item
        else:
            return {'top': item[0], 'left': item[1]}

    @classmethod
    def _item_state_v1p5_to_v2(cls, unused_item_id, item):
        """
        Migrates item_state from v1.5 to v2.0

        Changes:
        * Item placement attributes switched from absolute (left-top) to relative (x_percent-y_percent) units

        In: {'zone': 'Zone", 'correct': True, 'top': '100px', 'left': '120px'}
        Out: {'zone': 'Zone", 'correct': True, 'top': '100px', 'left': '120px'}
        """
        # Conversion can't be made as parent dimensions are unknown to python - converted in JS
        # Since 2.1 JS this conversion became unnecesary, so it was removed from JS code
        return item

    def _item_state_v2_to_v2p1(self, item_id, item):
        """
        Migrates item_state from v2.0 to v2.1

        * Single item can correspond to multiple zones - "zone" key is added to each item
        * Assessment mode - "correct" key is added to each item
        * Removed "no zone align" option; only automatic alignment is now allowed - removes attributes related to
          "absolute" placement of an item (relative to background image, as opposed to the zone)
        """
        self._multiple_zones_migration(item_id, item)
        self._assessment_mode_migration(item)
        self._automatic_alignment_migration(item)

        return item

    def _multiple_zones_migration(self, item_id, item):
        """
        Changes:
        * Adds "zone" attribute

        In: {'item_id': 0}
        Out: {'zone': 'Zone", 'item_id": 0}

        In: {'item_id': 1}
        Out: {'zone': 'unknown", 'item_id": 1}
        """
        if item.get('zone') is None:
            valid_zones = self._block.get_item_zones(int(item_id))
            if valid_zones:
                # If we get to this point, then the item was placed prior to support for
                # multiple correct zones being added. As a result, it can only be correct
                # on a single zone, and so we can trust that the item was placed on the
                # zone with index 0.
                item['zone'] = valid_zones[0]
            else:
                item['zone'] = 'unknown'

    @classmethod
    def _assessment_mode_migration(cls, item):
        """
        Changes:
        * Adds "correct" attribute if missing

        In: {'item_id': 0}
        Out: {'item_id': 'correct': True}

        In: {'item_id': 0, 'correct': True}
        Out: {'item_id': 'correct': True}

        In: {'item_id': 0, 'correct': False}
        Out: {'item_id': 'correct': False}
        """
        # If correctness information is missing
        # (because problem was completed before assessment mode was implemented),
        # assume the item is in correct zone (in standard mode, only items placed
        # into correct zone are stored in item state).
        if item.get('correct') is None:
            item['correct'] = True

    @classmethod
    def _automatic_alignment_migration(cls, item):
        """
        Changes:
        * Removed old "absolute" placement attributes
        * Removed "none" zone alignment, making "x_percent" and "y_percent" attributes obsolete

        In: {'zone': 'Zone", 'correct': True, 'top': '100px', 'left': '120px', 'absolute': true}
        Out: {'zone': 'Zone", 'correct': True}

        In: {'zone': 'Zone", 'correct': True, 'x_percent': '90%', 'y_percent': '20%'}
        Out: {'zone': 'Zone", 'correct': True}
        """
        attributes_to_remove = ['x_percent', 'y_percent', 'left', 'top', 'absolute']
        for attribute in attributes_to_remove:
            item.pop(attribute, None)

        return item
