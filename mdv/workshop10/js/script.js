console.log("Starting...");

var xml;
$(document).ready(function() {
	$.ajax({
		type: "GET",
		url: "lolcatz.xml",
		dataType: "xml",
		success: xmlParser
	});
});


function xmlParser (data) {
	xml = data;
	$(xml).find("kitteh").each(function () {
		kitteh = $(this);
		var id =$(kitteh).find("id").text();
		var name = $(kitteh).find("name").text();
		var src = $(kitteh).find("url").text();

		console.log(id);
		console.log(name);
		console.log(src);

		$("#myList").append('<li><a href="#' + id + '">' + name + '</a></li>');
		$("#myPages").append('<div data-role="page" id="' + id + '"><h1>' + name + '</h1></div>');
		$("#" + id).append('<img src="' + src + '" />');
	});
}
