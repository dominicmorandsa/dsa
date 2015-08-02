<?php 

function fibonacci($number)
{
	if ($number < 3) {
		return 1;
	} else {
		return (fibonacci($number - 1) + fibonacci($number - 2));
	}
	
}

function PrintSequence($num)
{
	$total = 0;
	echo "The first " . $num . " Fibonacci numbers are:<br>";
	for ($i=1; $i < $num+1; $i++) { 
		$fib = fibonacci($i);
		echo  $fib . " ";
		$total += $fib;
	}
	echo "<br>The average is " . ($total/$num);
}

echo "<h2>Fibonacci</h2>";

PrintSequence(20);

?>