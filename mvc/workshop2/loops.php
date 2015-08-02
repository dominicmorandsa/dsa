<h2> Workshop 2</h2>

<?php

echo "<h3>(for loop)</h3>";
for ($i = 0; $i < 10; $i++ ) {
	echo $i . "<br>";
}

echo "<h3>(while loop)</h3>";

$i = 0;

while ($i < 10) {
	echo $i . ", ";
	$i++;
}

echo "<h3>(do-while loop)</h3>";

$i = 0;

do {
	echo $i . ", ";
	$i++;
} while ($i < 10) ;
		




?>