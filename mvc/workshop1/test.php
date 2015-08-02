<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Test XAMPP</title>
</head>
<body>
  <h1>Testing PHP</h1>
  <h2>This is a .php file.</h2>
  
  <?php
	// Simple php script
  	echo "Hello from PHP!!";
  	echo "<h3>Operators</h3>";

  	echo "<h4> Part 4</h4>";
  	
	echo "2 + 2 = " . (2 + 2) . "<br>";
	echo "6 - 3 = " . (6 - 3) . "<br>";
	echo "4 / 3 = " . (4 / 3) . "<br>";
	echo "2 * 7 = " . (2 * 7) . "<br>";

  	echo "<h4> Part 5</h4>";

	$num1 = 1;
	$num2 = 2;
		
	$ans = $num1 + $num2;
	echo $num1 . " + " . $num2 . " = " .$ans . "<br>";

	$ans = $num1 - $num2;
	echo $num1 . " - " . $num2 . " = " .$ans . "<br>";
	
	$ans = $num1 * $num2;
	echo $num1 . " * " . $num2 . " = " .$ans . "<br>";

	$ans = $num1 / $num2;
	echo $num1 . " / " . $num2 . " = " .$ans . "<br>";



  ?>

</body>
</html>