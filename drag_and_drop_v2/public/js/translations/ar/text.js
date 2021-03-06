
            (function(global){
                var DragAndDropI18N = {
                  init: function() {
                    

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 && n%100<=99 ? 4 : 5;
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "\n                            Please provide a description of the image for non-visual users.\n                            The description should provide sufficient information to allow anyone\n                            to solve the problem even without seeing the image.\n                        ": "\n                            \u0627\u0644\u0631\u062c\u0627\u0621 \u062a\u0642\u062f\u064a\u0645 \u0634\u0631\u062d \u0644\u0644\u0635\u0648\u0631\u0629 \u0644\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646 \u063a\u064a\u0631 \u0627\u0644\u0645\u0631\u0626\u064a\u064a\u0646.\n                            \u0645\u0646 \u0627\u0644\u0645\u0641\u062a\u0631\u0636 \u0623\u0646 \u064a\u0648\u0641\u0631 \u0627\u0644\u0634\u0631\u062d \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0643\u0627\u0641\u064a\u0629 \u0644\u0644\u0633\u0645\u0627\u062d \u0644\u0623\u064a \u0634\u062e\u0635 \n                            \u0628\u062d\u0644 \u0627\u0644\u0645\u0633\u0623\u0644\u0629 \u062d\u062a\u0649 \u0628\u062f\u0648\u0646 \u0631\u0624\u064a\u0629 \u0627\u0644\u0635\u0648\u0631\u0629.\n                        ", 
    "\"Maximum items per zone\" should be positive integer, got {max_items_per_zone}": "\"\u0623\u0642\u0635\u0649 \u0639\u062f\u062f \u0644\u0644\u0639\u0646\u0627\u0635\u0631 \u0641\u064a \u0643\u0644 \u0645\u0646\u0637\u0642\u0629\" \u064a\u0646\u0628\u063a\u064a \u0623\u0646 \u064a\u0643\u0648\u0646 \u0631\u0642\u0645\u064b\u0627 \u0635\u062d\u064a\u062d\u064b\u0627 \u0645\u0648\u062c\u0628\u064b\u0627\u060c \u0627\u0644\u0639\u062f\u062f \u0627\u0644\u0646\u0627\u062a\u062c {max_items_per_zone}", 
    "Add a zone": "\u0625\u0636\u0627\u0641\u0629 \u0645\u0646\u0637\u0642\u0629", 
    "Add an item": "\u0625\u0636\u0627\u0641\u0629 \u0639\u0646\u0635\u0631", 
    "Align dropped items to the left, center, or right.": "\u0642\u0645 \u0628\u0645\u062d\u0627\u0630\u0627\u0629 \u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u062a\u064a \u062a\u0645 \u0648\u0636\u0639\u0647\u0627 \u0625\u0644\u0649 \u0627\u0644\u064a\u0633\u0627\u0631 \u0623\u0648 \u0627\u0644\u0645\u0646\u062a\u0635\u0641 \u0623\u0648 \u0627\u0644\u064a\u0645\u064a\u0646.", 
    "Alignment": "\u0627\u0644\u0645\u062d\u0627\u0630\u0627\u0629", 
    "An error occurred. Unable to load drag and drop problem.": "\u0644\u0642\u062f \u062d\u062f\u062b \u062e\u0637\u0623. \u062a\u0639\u0630\u0631 \u062a\u062d\u0645\u064a\u0644 \u0645\u0633\u0623\u0644\u0629 \u0627\u0644\u0633\u062d\u0628 \u0648\u0627\u0644\u0625\u0633\u0642\u0627\u0637.", 
    "An isosceles triangle with three layers of similar height. It is shown upright, so the widest layer is located at the bottom, and the narrowest layer is located at the top.": "\u0645\u062b\u0644\u062b \u0645\u062a\u0633\u0627\u0648\u064a \u0627\u0644\u0633\u0627\u0642\u064a\u0646 \u0630\u0648 \u062b\u0644\u0627\u062b \u0637\u0628\u0642\u0627\u062a \u0630\u0627\u062a \u0646\u0641\u0633 \u0627\u0644\u0627\u0631\u062a\u0641\u0627\u0639. \u0648\u064a\u0628\u062f\u0648 \u0642\u0627\u0626\u0645\u0627\u064b \u0628\u062d\u064a\u062b \u062a\u0648\u062c\u062f \u0623\u0648\u0633\u0639 \u0637\u0628\u0642\u0629 \u0641\u064a \u0627\u0644\u0623\u0633\u0641\u0644\u060c \u0648\u0623\u0636\u064a\u0642 \u0637\u0628\u0642\u0629 \u0641\u064a \u0627\u0644\u0623\u0639\u0644\u0649.", 
    "Assessment": "\u062a\u0642\u064a\u064a\u0645", 
    "Background URL": "URL \u0644\u0644\u062e\u0644\u0641\u064a\u0629", 
    "Background description": "\u0648\u0635\u0641 \u0627\u0644\u062e\u0644\u0641\u064a\u0629", 
    "Cancel": "\u0625\u0644\u063a\u0627\u0621", 
    "Change background": "\u062a\u063a\u064a\u064a\u0631 \u0627\u0644\u062e\u0644\u0641\u064a\u0629", 
    "Close item feedback popup": "\u0623\u063a\u0644\u0642 \u0646\u0627\u0641\u0630\u0629 \u0627\u0644\u062a\u0639\u0644\u064a\u0642\u0627\u062a \u0627\u0644\u0645\u0646\u0628\u062b\u0642\u0629 \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0627\u0644\u0639\u0646\u0635\u0631", 
    "Continue": "\u0627\u0633\u062a\u0645\u0631\u0627\u0631", 
    "Correct! This one belongs to {zone}.": "\u0635\u062d\u064a\u062d! \u0647\u0630\u0627 \u064a\u0646\u062a\u0645\u064a \u0625\u0644\u0649 {zone}.", 
    "Correctly placed in: {zone_title}": "\u0648\u0636\u0639 \u0628\u0634\u0643\u0644 \u0635\u062d\u064a\u062d \u0641\u064a: {zone_title}", 
    "Defines the number of times a student can try to answer this problem. If the value is not set, infinite attempts are allowed.": "\u064a\u062d\u062f\u062f \u0639\u062f\u062f \u0627\u0644\u0645\u0631\u0627\u062a \u0627\u0644\u062a\u064a \u064a\u0633\u062a\u0637\u064a\u0639 \u0641\u064a\u0647\u0627 \u0627\u0644\u0637\u0627\u0644\u0628 \u0645\u062d\u0627\u0648\u0644\u0629 \u0627\u0644\u0625\u062c\u0627\u0628\u0629 \u0639\u0646 \u0647\u0630\u0647 \u0627\u0644\u0645\u0633\u0623\u0644\u0629. \u0641\u064a \u062d\u0627\u0644\u0629 \u0639\u062f\u0645 \u062a\u062d\u062f\u064a\u062f \u0642\u064a\u0645\u0629\u060c \u0641\u0625\u0646\u0647 \u064a\u064f\u0633\u0645\u062d \u0628\u0639\u062f\u062f \u0644\u0627 \u0646\u0647\u0627\u0626\u064a \u0645\u0646 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0627\u062a.", 
    "Describe this zone to non-visual users.": "\u0635\u0641 \u0647\u0630\u0647 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0644\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646 \u0627\u0644\u0639\u0627\u062c\u0632\u064a\u0646 \u0639\u0646 \u0627\u0644\u0631\u0624\u064a\u0629.", 
    "Description": "\u0627\u0644\u0634\u0631\u062d", 
    "Display label names on the image": "\u0639\u0631\u0636 \u0623\u0633\u0645\u0627\u0621 \u0627\u0644\u0645\u0644\u0635\u0642\u0627\u062a \u0639\u0644\u0649 \u0627\u0644\u0635\u0648\u0631\u0629", 
    "Display the heading \"Problem\" above the problem text?": "\u0639\u0631\u0636 \u0639\u0646\u0648\u0627\u0646 \"\u0627\u0644\u0645\u0633\u0623\u0644\u0629\" \u0641\u0648\u0642 \u0646\u0635 \u0627\u0644\u0645\u0633\u0623\u0644\u0629\u061f", 
    "Display the title to the learner?": "\u0639\u0631\u0636 \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0644\u0644\u0637\u0644\u0627\u0628\u061f", 
    "Display zone borders on the image": "\u0639\u0631\u0636 \u062d\u062f\u0648\u062f \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0639\u0644\u0649 \u0627\u0644\u0635\u0648\u0631\u0629", 
    "Drag and Drop": "\u0633\u062d\u0628 \u0648\u0625\u0633\u0642\u0627\u0637", 
    "Drag the items onto the image above.": "\u0642\u0645 \u0628\u062c\u0631 \u0647\u0630\u0647 \u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0625\u0644\u0649 \u0627\u0644\u0635\u0648\u0631\u0629 \u0623\u0639\u0644\u0627\u0647.", 
    "Failed to parse \"Maximum items per zone\"": "\u0641\u0634\u0644 \u0641\u064a \u062a\u062d\u0644\u064a\u0644 \"\u0623\u0642\u0635\u0649 \u0639\u062f\u062f \u0644\u0644\u0639\u0646\u0627\u0635\u0631 \u0641\u064a \u0643\u0644 \u0645\u0646\u0637\u0642\u0629\"", 
    "Feedback": "\u062a\u0642\u064a\u064a\u0645", 
    "Final attempt was used, highest score is {score}": "\u062a\u0645 \u0627\u0633\u062a\u0646\u0641\u0627\u062f \u0622\u062e\u0631 \u0645\u062d\u0627\u0648\u0644\u0629\u060c \u0623\u0639\u0644\u0649 \u062f\u0631\u062c\u0629 \u0647\u064a {score}", 
    "For example, 'http://example.com/background.png' or '/static/background.png'.": "\u0639\u0644\u0649 \u0633\u0628\u064a\u0644 \u0627\u0644\u0645\u062b\u0627\u0644\u060c 'http://example.com/background.png' \u0623\u0648 '/static/background.png'.", 
    "For example, 'http://example.com/image.png' or '/static/image.png'.": "\u0639\u0644\u0649 \u0633\u0628\u064a\u0644 \u0627\u0644\u0645\u062b\u0627\u0644\u060c  'http://example.com/image.png' \u0623\u0648 '/static/image.png'.", 
    "Goes anywhere": "\u064a\u0646\u062a\u0645\u064a \u0644\u0623\u064a \u0645\u0643\u0627\u0646", 
    "Goes to the bottom": "\u064a\u0646\u062a\u0642\u0644 \u0625\u0644\u0649 \u0627\u0644\u0646\u0637\u0627\u0642 \u0627\u0644\u0633\u0641\u0644\u064a", 
    "Goes to the middle": "\u064a\u0646\u062a\u0642\u0644 \u0625\u0644\u0649 \u0627\u0644\u0646\u0637\u0627\u0642 \u0627\u0644\u0623\u0648\u0633\u0637", 
    "Goes to the top": "\u064a\u0646\u062a\u0642\u0644 \u0625\u0644\u0649 \u0627\u0644\u0646\u0637\u0627\u0642 \u0627\u0644\u0639\u0644\u0648\u064a", 
    "Good work! You have completed this drag and drop problem.": "\u0623\u062d\u0633\u0646\u062a \u0635\u0646\u0639\u0627\u064b! \u0644\u0642\u062f \u0627\u0633\u062a\u0643\u0645\u0644\u062a \u062d\u0644 \u0645\u0633\u0623\u0644\u0629 \u0627\u0644\u0633\u062d\u0628 \u0648\u0627\u0644\u0625\u0633\u0642\u0627\u0637.", 
    "I don't belong anywhere": "\u0623\u0646\u0627 \u0644\u0627 \u0623\u0646\u062a\u0645\u064a \u0625\u0644\u0649 \u0623\u064a \u0645\u0643\u0627\u0646", 
    "Image URL (alternative to the text)": "URL \u0644\u0644\u0635\u0648\u0631\u0629 (\u0628\u062f\u064a\u0644 \u0644\u0644\u0646\u0635)", 
    "Image description (should provide sufficient information to place the item even if the image did not load)": "\u0634\u0631\u062d \u0627\u0644\u0635\u0648\u0631\u0629 (\u0645\u0646 \u0627\u0644\u0645\u0641\u062a\u0631\u0636 \u0623\u0646 \u064a\u0648\u0641\u0631 \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0643\u0627\u0641\u064a\u0629 \u0644\u0648\u0636\u0639 \u0627\u0644\u0639\u0646\u0635\u0631 \u062d\u062a\u0649 \u0625\u0630\u0627 \u0644\u0645 \u064a\u062a\u0645 \u062a\u062d\u0645\u0644 \u0627\u0644\u0635\u0648\u0631\u0629)", 
    "Indicates whether a learner has completed the problem at least once": "\u064a\u0648\u0636\u062d \u0645\u0627 \u0625\u0630\u0627 \u0643\u0627\u0646 \u0627\u0644\u0637\u0627\u0644\u0628 \u0642\u062f \u0623\u0646\u0647\u0649 \u0627\u0644\u0645\u0633\u0627\u0644\u0629 \u0645\u0631\u0629 \u0648\u0627\u062d\u062f\u0629 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644", 
    "Information about current positions of items that a learner has dropped on the target image.": "\u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0628\u0634\u0623\u0646 \u0627\u0644\u0623\u0648\u0636\u0627\u0639 \u0627\u0644\u062d\u0627\u0644\u064a\u0629 \u0644\u0644\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u062a\u064a \u0623\u0633\u0642\u0637\u0647\u0627 \u0627\u0644\u0637\u0627\u0644\u0628 \u0641\u064a \u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u0633\u062a\u0647\u062f\u0641\u0629.", 
    "Information about zones, items, feedback, and background image for this problem. This information is derived from the input that a course author provides via the interactive editor when configuring the problem.": "\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0639\u0646 \u0627\u0644\u0645\u0646\u0627\u0637\u0642\u060c \u0627\u0644\u0639\u0646\u0627\u0635\u0631\u060c \u0627\u0644\u062a\u0642\u064a\u064a\u0645\u060c \u0648\u0635\u0648\u0631\u0629 \u0627\u0644\u062e\u0644\u0641\u064a\u0629 \u0644\u0647\u0630\u0647 \u0627\u0644\u0645\u0633\u0623\u0644\u0629. \u0647\u0630\u0647 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0645\u0633\u062a\u0645\u062f\u0629 \u0645\u0646 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u064a \u064a\u0642\u062f\u0645\u0647\u0627 \u0643\u0627\u062a\u0628 \u0627\u0644\u062f\u0648\u0631\u0629 \u0627\u0644\u062a\u062f\u0631\u064a\u0628\u064a\u0629 \u0639\u0646 \u0637\u0631\u064a\u0642 \u0627\u0644\u0645\u062d\u0631\u0631 \u0627\u0644\u062a\u0641\u0627\u0639\u0644\u064a \u0639\u0646\u062f \u0643\u062a\u0627\u0628\u0629 \u0627\u0644\u0645\u0633\u0627\u0644\u0629.", 
    "Item Bank": "\u0628\u0646\u0643 \u0627\u0644\u0639\u0646\u0627\u0635\u0631", 
    "Item background color": "\u0644\u0648\u0646 \u062e\u0644\u0641\u064a\u0629 \u0627\u0644\u0639\u0646\u0635\u0631", 
    "Item text color": "\u0644\u0648\u0646 \u0646\u0635 \u0627\u0644\u0639\u0646\u0635\u0631", 
    "Items": "\u0627\u0644\u0639\u0646\u0627\u0635\u0631", 
    "Keeps maximum score achieved by student": "\u064a\u0633\u062c\u0644 \u0623\u0639\u0644\u0649 \u0639\u0644\u0627\u0645\u0627\u062a \u062d\u0635\u0644 \u0639\u0644\u064a\u0647\u0627 \u0627\u0644\u0637\u0627\u0644\u0628", 
    "Keyboard Help": "\u062f\u0639\u0645 \u0644\u0648\u062d\u0629 \u0627\u0644\u0645\u0641\u0627\u062a\u064a\u062d", 
    "Loading drag and drop problem.": "\u062a\u062d\u0645\u064a\u0644 \u0645\u0633\u0623\u0644\u0629 \u0627\u0644\u0633\u062d\u0628 \u0648\u0627\u0644\u0625\u0633\u0642\u0627\u0637.", 
    "Max number of attempts reached": "\u0644\u0642\u062f \u0648\u0635\u0644\u062a \u0625\u0644\u0649 \u0623\u0642\u0635\u0649 \u0639\u062f\u062f \u0645\u0646 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0627\u062a", 
    "Maximum attempts": "\u0623\u0642\u0635\u0649 \u0639\u062f\u062f \u0644\u0644\u0645\u062d\u0627\u0648\u0644\u0627\u062a", 
    "Mode": "\u0627\u0644\u062d\u0627\u0644\u0629", 
    "No, this item does not belong here. Try again.": "\u0644\u0627\u060c \u0647\u0630\u0627 \u0627\u0644\u0639\u0646\u0635\u0631 \u0644\u0627 \u064a\u0646\u062a\u0645\u064a \u0625\u0644\u0649 \u0647\u0630\u0647 \u0627\u0644\u0645\u0646\u0637\u0642\u0629. \u062d\u0627\u0648\u0644 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649.", 
    "None": "\u0644\u0627 \u0634\u064a\u0621", 
    "Note: do not edit the problem if students have already completed it. Delete the problem and create a new one.": "\u0645\u0644\u0627\u062d\u0638\u0629: \u0644\u0627 \u062a\u0642\u0645 \u0628\u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0645\u0633\u0623\u0644\u0629 \u0625\u0630\u0627 \u0642\u0627\u0645 \u0627\u0644\u0637\u0644\u0627\u0628 \u0628\u0627\u0633\u062a\u0643\u0645\u0627\u0644\u0647\u0627 \u0628\u0627\u0644\u0641\u0639\u0644. \u0627\u062d\u0630\u0641 \u0627\u0644\u0645\u0633\u0623\u0644\u0629 \u0648\u0642\u0645 \u0628\u0643\u062a\u0627\u0628\u0629 \u0645\u0633\u0623\u0644\u0629 \u062c\u062f\u064a\u062f\u0629.", 
    "Number of attempts learner used": "\u0639\u062f\u062f \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0627\u062a \u0627\u0644\u062a\u064a \u0627\u0633\u062a\u062e\u062f\u0645\u0647\u0627 \u0627\u0644\u0637\u0627\u0644\u0628", 
    "OK": "\u0645\u0648\u0627\u0641\u0642", 
    "Of course it goes here! It goes anywhere!": "\u0628\u0627\u0644\u0637\u0628\u0639 \u064a\u0646\u062a\u0645\u064a \u0625\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u0645\u0643\u0627\u0646! \u0625\u0646\u0647 \u064a\u0646\u062a\u0645\u064a \u0644\u0623\u064a \u0645\u0643\u0627\u0646!", 
    "Placed in: {zone_title}": "\u0648\u0636\u0639 \u0641\u064a: {zone_title}", 
    "Please check over your submission.": "\u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0625\u0631\u0633\u0627\u0644\u0643.", 
    "Preferred width": "\u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u0645\u0641\u0636\u0644", 
    "Press \"Enter\", \"Space\", \"Ctrl-m\", or \"\u2318-m\" on an item to select it for dropping, then navigate to the zone you want to drop it on.": "\u0627\u0636\u063a\u0637 \u0639\u0644\u0649 \"Enter\"\u060c \u0623\u0648 \"Space\"\u060c \u0623\u0648 \"Ctrl-m\"\u060c \u0623\u0648 \"\u2318-m\" \u0639\u0644\u0649 \u0639\u0646\u0635\u0631 \u0645\u0639\u064a\u0646 \u0644\u0627\u062e\u062a\u064a\u0627\u0631\u0647 \u0644\u0644\u0625\u0633\u0642\u0627\u0637\u060c \u062b\u0645 \u0627\u0646\u062a\u0642\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u062a\u064a \u062a\u0631\u063a\u0628 \u0641\u064a \u0625\u0633\u0642\u0627\u0637\u0647 \u0641\u064a\u0647\u0627.", 
    "Press \"Enter\", \"Space\", \"Ctrl-m\", or \"\u2318-m\" to drop the item on the current zone.": "\u0627\u0636\u063a\u0637 \u0639\u0644\u0649 \"Enter\"\u060c \u0623\u0648 \"Space\"\u060c \u0623\u0648 \"Ctrl-m\"\u060c \u0623\u0648 \"\u2318-m\" \u0644\u0625\u0633\u0642\u0627\u0637 \u0627\u0644\u0639\u0646\u0635\u0631 \u0641\u064a \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u062d\u0627\u0644\u064a\u0629.", 
    "Press \"Esc\" if you want to cancel the drop operation (for example, to select a different item).": "\u0627\u0636\u063a\u0637 \u0639\u0644\u0649 \"Esc\" \u0625\u0630\u0627 \u0643\u0646\u062a \u062a\u0631\u063a\u0628 \u0641\u064a \u0625\u0644\u063a\u0627\u0621 \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u0625\u0633\u0642\u0627\u0637 (\u0639\u0644\u0649 \u0633\u0628\u064a\u0644 \u0627\u0644\u0645\u062b\u0627\u0644\u060c \u0644\u0627\u062e\u062a\u064a\u0627\u0631 \u0639\u0646\u0635\u0631 \u0645\u062e\u062a\u0644\u0641).", 
    "Problem": "\u0627\u0644\u0645\u0633\u0623\u0644\u0629", 
    "Problem data": "\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0633\u0623\u0644\u0629", 
    "Problem text": "\u0646\u0635 \u0627\u0644\u0645\u0633\u0623\u0644\u0629", 
    "Remove item": "\u0642\u0645 \u0628\u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u0639\u0646\u0635\u0631", 
    "Remove zone": "\u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u0645\u0646\u0637\u0642\u0629", 
    "Reset": "\u0625\u0639\u0627\u062f\u0629 \u062a\u0639\u064a\u064a\u0646", 
    "Save": "\u062d\u0641\u0638", 
    "Show \"Problem\" heading": "\u0625\u0638\u0647\u0627\u0631 \u0639\u0646\u0648\u0627\u0646 \"\u0627\u0644\u0645\u0633\u0623\u0644\u0629\"", 
    "Show advanced settings": "\u0625\u0638\u0647\u0627\u0631 \u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062a\u0642\u062f\u0645\u0629", 
    "Show title": "\u0639\u0631\u0636 \u0627\u0644\u0639\u0646\u0648\u0627\u0646", 
    "Some of your answers were not correct.": "\u0628\u0639\u0636 \u0625\u062c\u0627\u0628\u0627\u062a\u0643 \u0643\u0627\u0646\u062a \u062e\u0627\u0637\u0626\u0629.", 
    "Specify preferred width as percentage of the background image width. Leave blank for automatic width.": "\u062d\u062f\u062f \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u0645\u0641\u0636\u0644 \u0639\u0644\u0649 \u0647\u064a\u0626\u0629 \u0646\u0633\u0628\u0629 \u0645\u0626\u0648\u064a\u0629 \u0645\u0646 \u0639\u0631\u0636 \u0635\u0648\u0631\u0629 \u0627\u0644\u062e\u0644\u0641\u064a\u0629. \u0623\u0648 \u0627\u062a\u0631\u0643 \u0627\u0644\u062d\u0642\u0644 \u0641\u0627\u0631\u063a\u064b\u0627 \u0644\u062a\u062d\u062f\u064a\u062f \u0627\u0644\u0639\u0631\u0636 \u062a\u0644\u0642\u0627\u0626\u064a\u064b\u0627.", 
    "Standard": "\u0642\u064a\u0627\u0633\u064a", 
    "Standard mode: the problem provides immediate feedback each time a learner drops an item on a target zone. Assessment mode: the problem provides feedback only after a learner drops all available items on target zones.": "\u0627\u0644\u062d\u0627\u0644\u0629 \u0627\u0644\u0639\u0627\u062f\u064a\u0629: \u062a\u0642\u062f\u0645 \u0627\u0644\u0645\u0633\u0623\u0644\u0629 \u0631\u062f\u0627\u064b \u0641\u0648\u0631\u064a\u0627\u064b \u0641\u064a \u0643\u0644 \u0645\u0631\u0629 \u064a\u0636\u0639 \u0641\u064a\u0647\u0627 \u0627\u0644\u0637\u0627\u0644\u0628 \u0639\u0646\u0635\u0631 \u062f\u0627\u062e\u0644 \u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0647\u062f\u0641. \u062d\u0627\u0644\u0629 \u0627\u0644\u062a\u0642\u064a\u064a\u0645: \u062a\u0642\u062f\u0645 \u0627\u0644\u0645\u0633\u0623\u0644\u0629 \u0631\u062f\u0627\u064b \u0641\u0642\u0637 \u0628\u0639\u062f \u0623\u0646 \u064a\u0636\u0639 \u0627\u0644\u0637\u0627\u0644\u0628 \u062c\u0645\u064a\u0639 \u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u0645\u062a\u0627\u062d\u0629 \u062f\u0627\u062e\u0644 \u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u0647\u062f\u0641.", 
    "Submit": "\u0625\u0631\u0633\u0627\u0644", 
    "Text": "\u0627\u0644\u0646\u0635", 
    "Text color to use for draggable items (example: 'white' or '#ffffff').": "\u0644\u0648\u0646 \u0627\u0644\u0646\u0635 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0645\u0639 \u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u0633\u062d\u0628 (\u0639\u0644\u0649 \u0633\u0628\u064a\u0644 \u0627\u0644\u0645\u062b\u0627\u0644: \"\u0623\u0628\u064a\u0636\" \u0623\u0648 '#ffffff')", 
    "The Bottom Zone": "\u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0633\u0641\u0644\u0649", 
    "The Middle Zone": "\u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0648\u0633\u0637\u0649", 
    "The Top Zone": "\u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0639\u0644\u064a\u0627", 
    "The background color of draggable items in the problem (example: 'blue' or '#0000ff').": "\u0644\u0648\u0646 \u0627\u0644\u062e\u0644\u0641\u064a\u0629 \u0644\u0644\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u0633\u062d\u0628 \u0641\u064a \u0627\u0644\u0645\u0633\u0623\u0644\u0629 (\u0639\u0644\u0649 \u0633\u0628\u064a\u0644 \u0627\u0644\u0645\u062b\u0627\u0644: \"\u0623\u0632\u0631\u0642\" \u0623\u0648 '#0000ff').", 
    "The description of the problem or instructions shown to the learner.": "\u0648\u0635\u0641 \u0627\u0644\u0645\u0633\u0623\u0644\u0629 \u0623\u0648 \u0627\u0644\u062a\u0639\u0644\u064a\u0645\u0627\u062a \u0627\u0644\u0645\u0648\u0636\u062d\u0629 \u0644\u0644\u0637\u0627\u0644\u0628.", 
    "The title of the drag and drop problem. The title is displayed to learners.": "\u0639\u0646\u0648\u0627\u0646 \u0645\u0633\u0623\u0644\u0629 \u0627\u0644\u0633\u062d\u0628 \u0648\u0627\u0644\u0625\u0633\u0642\u0627\u0637. \u064a\u0638\u0647\u0631 \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0644\u0644\u0637\u0644\u0627\u0628.", 
    "There was an error with your form.": "\u0644\u0642\u062f \u0643\u0627\u0646 \u0647\u0646\u0627\u0643 \u062e\u0637\u0623 \u0641\u064a \u0627\u0633\u062a\u0645\u0627\u0631\u062a\u0643.", 
    "Title": "\u0627\u0644\u0639\u0646\u0648\u0627\u0646", 
    "Unknown DnDv2 mode {mode} - course is misconfigured": "\u0648\u0636\u0639 DnDv2 \u063a\u064a\u0631 \u0645\u0639\u0631\u0648\u0641 {\u0648\u0636\u0639} - \u062e\u0637\u0623 \u0641\u064a \u062a\u0643\u0648\u064a\u0646 \u0627\u0644\u062f\u0648\u0631\u0629", 
    "Use \"Tab\" and \"Shift-Tab\" to navigate between items and zones.": "\u0627\u0633\u062a\u062e\u062f\u0645 \"Tab\" \u0648 \"Shift-Tab\" \u0644\u0644\u062a\u0646\u0642\u0644 \u0628\u064a\u0646 \u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0648\u0627\u0644\u0645\u0646\u0627\u0637\u0642.", 
    "Use text that is clear and descriptive of the item to be placed.": "\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0646\u0635 \u0627\u0644\u0648\u0627\u0636\u062d \u0627\u0644\u0630\u064a \u064a\u0635\u0641 \u0627\u0644\u0639\u0646\u0635\u0631 \u0627\u0644\u0645\u0637\u0644\u0648\u0628 \u0648\u0636\u0639\u0647.", 
    "Use this zone to associate an item with the bottom layer of the triangle.": "\u0627\u0633\u062a\u062e\u062f\u0645 \u0647\u0630\u0647 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0644\u0631\u0628\u0637 \u0639\u0646\u0635\u0631 \u0645\u0639 \u0627\u0644\u0637\u0628\u0642\u0629 \u0627\u0644\u0633\u0641\u0644\u0649 \u0641\u064a \u0627\u0644\u0645\u062b\u0644\u062b.", 
    "Use this zone to associate an item with the middle layer of the triangle.": "\u0627\u0633\u062a\u062e\u062f\u0645 \u0647\u0630\u0647 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0644\u0631\u0628\u0637 \u0639\u0646\u0635\u0631 \u0645\u0639 \u0627\u0644\u0637\u0628\u0642\u0629 \u0627\u0644\u0648\u0633\u0637\u0649 \u0641\u064a \u0627\u0644\u0645\u062b\u0644\u062b.", 
    "Use this zone to associate an item with the top layer of the triangle.": "\u0627\u0633\u062a\u062e\u062f\u0645 \u0647\u0630\u0647 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0644\u0631\u0628\u0637 \u0639\u0646\u0635\u0631 \u0645\u0639 \u0627\u0644\u0637\u0628\u0642\u0629 \u0627\u0644\u0639\u0644\u064a\u0627 \u0641\u064a \u0627\u0644\u0645\u062b\u0644\u062b.", 
    "You can complete this problem using only your keyboard.": "\u064a\u0645\u0643\u0646\u0643 \u0627\u0633\u062a\u0643\u0645\u0627\u0644 \u0647\u0630\u0647 \u0627\u0644\u0645\u0633\u0623\u0644\u0629 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0644\u0648\u062d\u0629 \u0627\u0644\u0645\u0641\u0627\u062a\u064a\u062d \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0643 \u0641\u0642\u0637.", 
    "You have used {used} of {total} attempts.": "\u0644\u0642\u062f \u0627\u0633\u062a\u062e\u062f\u0645\u062a {used} \u0645\u0646 {total} \u0645\u062d\u0627\u0648\u0644\u0627\u062a.", 
    "You silly, there are no zones for this one.": "\u0623\u064a\u0647\u0627 \u0627\u0644\u0633\u0627\u0630\u062c\u060c \u0644\u0627 \u062a\u0648\u062c\u062f \u0645\u0646\u0627\u0637\u0642 \u0645\u0644\u0627\u0626\u0645\u0629 \u0644\u0647\u0630\u0627 \u0627\u0644\u0639\u0646\u0635\u0631.", 
    "Zone": "\u0627\u0644\u0645\u0646\u0637\u0642\u0629", 
    "Zone borders": "\u062d\u062f\u0648\u062f \u0627\u0644\u0645\u0646\u0637\u0642\u0629", 
    "Zone definitions": "\u062a\u062d\u062f\u064a\u062f\u0627\u062a \u0627\u0644\u0645\u0646\u0627\u0637\u0642", 
    "Zone labels": "\u0645\u0644\u0635\u0642\u0627\u062a \u0627\u0644\u0645\u0646\u0627\u0637\u0642", 
    "Zones": "\u0627\u0644\u0645\u0646\u0627\u0637\u0642", 
    "center": "\u0648\u0633\u0637", 
    "do_attempt handler should only be called for assessment mode": "\u064a\u062c\u0628 \u0639\u062f\u0645 \u0637\u0644\u0628 \u0645\u0633\u0624\u0648\u0644 do_attempt \u0625\u0644\u0627 \u0641\u064a \u062d\u0627\u0644\u0629 \u0627\u0644\u062a\u0642\u064a\u064a\u0645", 
    "height": "\u0627\u0644\u0627\u0631\u062a\u0641\u0627\u0639", 
    "left": "\u064a\u0633\u0627\u0631", 
    "none": "\u0644\u0627 \u0634\u064a\u0621", 
    "ok": "\u0645\u0648\u0627\u0641\u0642", 
    "right": "\u064a\u0645\u064a\u0646", 
    "width": "\u0627\u0644\u0639\u0631\u0636"
  };
  for (var key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value[django.pluralidx(count)];
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "N j, Y, P", 
    "DATETIME_INPUT_FORMATS": [
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d", 
      "%m/%d/%Y %H:%M:%S", 
      "%m/%d/%Y %H:%M:%S.%f", 
      "%m/%d/%Y %H:%M", 
      "%m/%d/%Y", 
      "%m/%d/%y %H:%M:%S", 
      "%m/%d/%y %H:%M:%S.%f", 
      "%m/%d/%y %H:%M", 
      "%m/%d/%y"
    ], 
    "DATE_FORMAT": "j F\u060c Y", 
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d", 
      "%m/%d/%Y", 
      "%m/%d/%y", 
      "%b %d %Y", 
      "%b %d, %Y", 
      "%d %b %Y", 
      "%d %b, %Y", 
      "%B %d %Y", 
      "%B %d, %Y", 
      "%d %B %Y", 
      "%d %B, %Y"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "0", 
    "MONTH_DAY_FORMAT": "j F", 
    "NUMBER_GROUPING": "0", 
    "SHORT_DATETIME_FORMAT": "m/d/Y P", 
    "SHORT_DATE_FORMAT": "d\u200f/m\u200f/Y", 
    "THOUSAND_SEPARATOR": ".", 
    "TIME_FORMAT": "g:i A", 
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S", 
      "%H:%M:%S.%f", 
      "%H:%M"
    ], 
    "YEAR_MONTH_FORMAT": "F Y"
  };

    django.get_format = function(format_type) {
      var value = django.formats[format_type];
      if (typeof(value) == 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }

}(this));


                  }
                };
                DragAndDropI18N.init();
                global.DragAndDropI18N = DragAndDropI18N;
            }(this));
        