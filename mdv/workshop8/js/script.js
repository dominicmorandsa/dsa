// window.onload = function() {
// 	if (window.jQuery) {
// 		console.log("jQuery loaded!");
// 	} else {
// 		alert("...oops!");
// 	}
// }

$(document).ready(function() {
	console.log("Ready");
	// Exercise 3a
	$("#hide-para").click(function(){
		$("p").hide();
	});

	$("#show-para").click(function(){
		$("p").show();
	});

	// Exercise 3b
	$("div").addClass("divbold");

	//Exercise 3c
	$("#show-time").click(function(){
		console.log("time");
		var date = new Date();
		var hh = date.getHours();
		var mm = date.getMinutes();
		var time = hh + ":" + mm;
		$("#time").text(time);
	});

	// Exercise 4
	var fArray = [];
	$("#collect").submit(function( event ){
		fArray[fArray.length] = $ ("input:first").val();
		$("#p-array").text("[" + fArray + "]");
		event.preventDefault();
	});
});
