<?php 

include 'sphere.class.php';
include 'shapes.class.php';
echo "starting...<br>";
$radius = 5;
$ball = new Sphere;


echo "(Before setting diameter) Diameter of sphere with radius " . $radius . " is: " . ($ball->getDiameter()) . "<br>";
$ball->setRadius($radius);
echo "(After setting diameter) Diameter of sphere with radius " . $radius . " is: " . ($ball->getDiameter()) . "<br>";
echo "Surface area of sphere with radius " . $radius . " is: " . ($ball->getArea()) . "<br>";
echo "Volume of sphere with radius " . $radius . " is: " . ($ball->getVolume()) . "<br>";

$sh = new Shapes();
$sh->setup('Sphere', 7);
echo "<br>";

?>