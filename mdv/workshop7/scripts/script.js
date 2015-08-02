// Workshop 7

// Exercise 1

function ex1 () {
	console.log("See browser console output");
}


// Exercise 2a

function ex2a () {
	for (var i = 0; i < 10; i++) {
		console.log("i = " + i);
	}
}



// Exercise 2b

function ex2b () {
	var keepLooping = true;
	var i = 0;

	while (keepLooping) {
		i++;
		console.log("i = " + i);
		if (i == 10) {
			keepLooping = false;
		}
	}
}



// Exercise 3a

function ex3a () {
	var i = 0;
	do	{
		var myNum = Math.floor(Math.random() * 10);
		console.log (myNum);
		i++;
	}

	while (i < 10);
}



// Exercise 3b

function ex3b () {
	console.log("Button clicked...");
}

// Exercise 4

var compHealth = 100;
var userHealth = 100;

function attack (arg) {
	var damage = Math.floor(Math.random() * 10);
	if (arg == "comp") {
		compHealth -= damage;
	} else {
		userHealth -= damage;
	}
}
function ex4a () {
	if ((compHealth > 0) && (userHealth > 0)) {
		console.log("Attacking...");
		attack("comp");
		console.log("User Health: " + userHealth + "......." + "Computer Health: " + compHealth); 
		console.log("Defending...");
		attack("user");
		console.log("User Health: " + userHealth + "......." + "Computer Health: " + compHealth);
	} else {
		if (userHealth < compHealth) {
				console.log ("User dies ... end of game!");
		} else {
				console.log ("Computer defeated ... Game Over!");
		}
	}
}


// Exercise 4b

function ex4b () {
	var compHealth = 100;
	var userHealth = 100;
	while ((compHealth > 0) && (userHealth > 0)) {
		console.log("Attacking...");
		compHealth -= Math.floor(Math.random() * 10);
		console.log("User Health: " + userHealth + "......." + "Computer Health: " + compHealth);
		console.log("Defending...");
		userHealth -= Math.floor(Math.random() * 10);
		console.log("User Health: " + userHealth + "......." + "Computer Health: " + compHealth);
	}

	if (userHealth < compHealth) {
				console.log ("User dies ... end of game!");
		} else {
				console.log ("Computer defeated ... Game Over!");
		}
}

ex1();
ex2a();
ex2b();
ex3a();