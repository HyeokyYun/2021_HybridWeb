todos = new Object();

$("#addButton").click(function () {
	var text = $("#inputBox").val();
	todos[text] = false;
	$("inputBox").val("");
	console.log(todos);
	$(".content ul").append(liTemplate(text));
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

function liTemplate(text) {
	var li = $("<li></li>");
	li.attr("value", text);
	li.append(inputTemplate(text));
	li.append(text);
	li.append(buttonTemplate(text));

	li.click(function (event) {
		var el = $(event.target);
		console.log(el.data("value"));
	});

	if (el.is("button")) {
		delete todos[text];
		$(`li[value='${text}]`).remove();
		console.log(todos);
	} else if (el.is("input[type='checkbox']")) {
		var isCheck = el.is(":checked");
		if (isCheck) {
			$(`li[value='${text}']`).addClass("checked");
			todos[text] = true;
		} else {
			$(`li[value='${text}']`).removeClass("checked");
			todos[text] = false;
		}
	}
	return li;
}