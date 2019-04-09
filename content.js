var elements = document.getElementsByTagName('*');
var swears = ["fuck", "shit", "ass", "cunt"];
var replacers = ["fudge", "poop", "butt", "crab"];

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
			var replacedText = text;
			for (var k = 0; k < swears.length; k++) {
				var replacedText = replacedText.replace(new RegExp(swears[k], "gi"), replacers[k]);
			}
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}