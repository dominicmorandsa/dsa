document.write("Using JavaScript" + "<br/>");

/* Exercise 1 - Create array of four animals */
document.write("<br/>" + "Exercise 1 - Create array of four animals" + "<br/>");

var animals = ["dog", "cat", "cow", "bird"];

/* Test array content / index */
document.write("<br/> "+ animals[3] + "<br/>");



/* Exercise 2 - For loop to write 0 to 9 */
document.write("<br/>" + "Exercise 2 - For loop to write 0 to 9" + "<br/>");

/* For loop to write 0 to 9*/
for (i = 0; i < 10; i++) {
	document.write("i = " + i);
	document.write("<br/>");
}

/* Exercise 3 - Display animal array contents using For loop */
document.write("<br/>" + "Exercise 3 - Display animal array contents using For loop" + "<br/>");

/* Display animal array contents using For loop */
var numberOfAnimals = animals.length;
for (i = 0; i < numberOfAnimals; i++) {
	document.write("[" + i + "]" + animals[i] + "<br/>");	
}

/* Exercise 4 - Display animal array with conditional message */
document.write("<br/>" + "Exercise 4 - Display animal array with conditional message" + "<br/>");

/* Display animal array with conditional message */
var numberOfAnimals = animals.length;
for (i = 0; i < numberOfAnimals; i++) {
	document.write("[" + i + "]" + animals[i] + "<br/>");
	if (animals[i] == "cow") {
		document.write("- - - - - if cow get some milk" + "<br/>");
	}
}

/* Exercise 5-1 - Create and Display numbers array 1 to 10 using For loops */
document.write("<br/>" + "Exercise 5-1 - Create and Display numbers array 1 to 10 using For loops" + "<br/>");

/* Create numbers array 1 to 10 using For loop */
var numbers = [];
for (i = 0; i < 10; i++) {
	numbers[i] = i + 1;
}

/* Display numbers array using For loop */
for (i = 0; i < 10; i++) {
	document.write(numbers[i] + ", ");
}

/* Exercise 5-2 - Create array of odd numbers 1 to 99 */
document.write("<br/>" + "Exercise 5-2 - Create array of odd numbers 1 to 99" + "<br/>");

/* Create array of odd numbers 1 to 99*/
var numbers = [];
var n = 1;
for (i = 0; i < 50; ) {
/*	document.write("i = " + i + "<br/>");
	document.write("n = " + n + "<br/>"); */
	if (n % 2 == 1) {
		numbers[i] = n;
		i++
	}
	n++;
}

/* Exercise 5-3a - Display odd numbers array using For loop */
document.write("<br/>" + "Exercise 5-3a - Display odd numbers array using For loop" + "<br/>");

/* Display odd numbers array using For loop*/
for (i = 0; i < 50; i++) {
	document.write(numbers[i] + ", ");
}

/* Exercise 5-3b - Display odd numbers 1 to 99 using For loop and modulus operator */
document.write("<br/><br/>" + "Exercise 5-3b - Display odd numbers 1 to 99 using For loop and modulus operator" + "<br/>");

/* Display odd numbers 1 to 99 using For loop and modulus operator*/
for (i = 1; i < 100; i++) {
	if (i % 2) {
		document.write(i + ", ");
	}
}

/* Exercise 5-3c - Display odd numbers 1 to 99 using For loop with index+=2 */
document.write("<br/><br/>" + "Exercise 5-3c - Display odd numbers 1 to 99 using For loop with index+=2" + "<br/>");

/* Display odd numbers 1 to 99 using For loop with index+=2*/
for (i = 1; i < 100; i+=2) {
	document.write(i + ", ");
}

/* Exercise 5-3d - Display numbers array using document.write() */
document.write("<br/><br/>" + "Exercise 5-3d - Display numbers array using document.write()" + "<br/>");
document.write(numbers);