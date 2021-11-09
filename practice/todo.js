todos = new Object();

$("#addButton").click(function () {
	var text = $("#inputBox").val();
	todos[text] = false;
	$("inputBox").val("");
	console.log(todos);
});
function inputTemplate(text) {
	var inputTag = $('<input type = "checkbox" id="checkBox">');
	inputTag.data("value", text);
	return inputTag;
}

function buttonTemplate(text) {
	var buttonTag = $('<button id="deleteButton">X</button>');
	buttonTag.data("value", text);
	return buttonTag;
}