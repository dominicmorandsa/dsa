<?php 
include 'shape.class.php';
include 'sphere.class.php';
include 'circle.class.php';
include 'rectangle.class.php';
include 'cube.class.php';
include 'setup.class.php';

echo "starting...<br>";


// $sphere = new Sphere;
// $circle = new Circle;
// $cube = new Cube;
// $rect = new Rectangle;
$setup = new Setup;
$setup->setup();


echo "<br>...ending";

?>