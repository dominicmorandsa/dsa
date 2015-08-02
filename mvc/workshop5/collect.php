<?php

if (isset($_POST)) {
	echo "Your name is ";
	echo $_POST['name'];
} else {
	echo "No name given!";
}


echo "<br>";

?>