//document.write("Using JavaScript - Unit 5" + "<br/>");
// Using JavaScript - Unit 5



document.getElementById("myBtn").addEventListener("click", showVal);

document.getElementById("btn").addEventListener("click", showVal);

function showVal(val) {
	//alert(document.getElementById("name").value);
	var name = document.getElementById("name").value;
	var sen = document.getElementById("words").innerHTML;
	//alert(document.getElementById("words").innerHTML = sen + " " + name);
	document.getElementById("words").innerHTML = (sen + " " + name);
}