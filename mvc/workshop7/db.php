<?php

$host = 'localhost';
$username = 'root';
$password = '';
$dbname = 'ws7';

$myDbConn = mysqli_connect($host,$username,$password,$dbname);
// var_dump ($myDbConn);
$query = "SELECT name FROM people";

$result = $myDbConn->query($query);

while ($row = mysqli_fetch_array($result)) {
	echo $row['name'] . '<br';

}