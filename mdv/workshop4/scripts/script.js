// Workshop 4
// Exercise 1

function areaCircle_5 () {
	var radius = 5;
	var area = (radius * radius * 3.14);
	return area;
}

function volumeSphere_5 () {
	var radius = 5;
	var volume = (radius * radius * radius * 3.14 * (4/3));
	return volume;
}

function areaCircle (arg) {
	var radius = arg;
	var area = (radius * radius * 3.14);
	return area;
}

function volumeSphere (arg) {
	var radius = arg;
	var volume = (radius * radius * radius * 3.14 * (4/3));
	return volume;
}

// Exercise 2

function plusTen () {
	var data = document.getElementById('data').value;
	document.getElementById("ex-2a").innerHTML = ( data + 10 );
	document.getElementById("ex-2b").innerHTML = ( parseInt(data) );
	document.getElementById("ex-2c").innerHTML = ( parseInt(data) + 10);
}


// Exercise 3

function first (arg) {
	var radius = arg;
	var area = (radius * radius * 3.14);
	return area;
}


function second () {
	var radius = document.getElementById('radius').value;
	var area = first(radius);
	document.getElementById("ex-3").innerHTML 
		= ( "Area is " + area );
}


// Exercise 4

function getX () {
	return 3;
}

function getY () {
	return "4";
}


//Initialise

function init () {
	// exercise 1
	document.getElementById("ex-1a").innerHTML 
		= "Area of circle with radius 5 = "+ areaCircle_5() + "<br/>";

	document.getElementById("ex-1b").innerHTML 
		= "Volume of sphere with radius 5 = "+ volumeSphere_5() + "<br/>";

	document.getElementById("ex-1c").innerHTML 
		= "Area of circle with radius " +
		  rCircle + 
		  " = " + 
		  areaCircle(rCircle) + 
		  "<br/>";

	document.getElementById("ex-1d").innerHTML 
		= "Volume of sphere with radius " +
		  rSphere + 
		  " = " + 
		  volumeSphere(rSphere) + 
		  "<br/>";

	// exercise 4
	document.getElementById("ex-4").innerHTML
		= ("Z = " + Z);

}

var rCircle = 3;
var rSphere = 4;
var Z = getX() + getY();

document.addEventListener("DOMContentLoaded", init, false);
