
// Workshop 5


function myFunction(data) {
	if (typeof data === "undefined") {

		data = "ex. 1";
	}

	alert("...something happened..." + data);
}

function picSwap (argument) {
	if (argument == 1) {
		document.getElementById("pic").src = "assets/imgs/pic1.jpg";
	} else {
		document.getElementById("pic").src = "assets/imgs/pic2.jpg";
	}
}

function showImg (argument) {
	var img = document.getElementById("ex4-input").value;
	document.getElementById("img").src = img;
}

function init () {	
	var ex2b = document.getElementById("ex-2b");
	ex2b.addEventListener("click", function(){myFunction("ex-2b")}, false);
	var ex4Btn = document.getElementById("ex4-btn");
	ex4Btn.addEventListener("click", function(){showImg()}, false);
}

document.addEventListener("DOMContentLoaded",init,false);
