<?php
/**
* 
*/
class Shapes
{
	public function __construct()
	{
		//echo "creating a Shape<br>";
	}

	public function setup($value, $radius)
	{
		$s = new $value;
		$s->setRadius($radius);
		//echo $s->getDiameter();
	}

}




?>