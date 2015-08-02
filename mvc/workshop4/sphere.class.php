<?php
/**
* 
*/
class Sphere extends Shape
{
	const PI = 3.14159;
	const FOUR_OVER_THREE = 1.333333;

	private $radius;

	public function __construct()
	{
		parent::__construct();
		//echo "creating a Sphere<br>";
	}

	public function setRadius($value)
	{
		$this->radius = $value;
	}

	public function getDiameter()
	{
		return $this->radius * 2;
	}

	public function getArea()
	{
		return 4 * self::PI * pow($this->radius, 2);
	}

	public function getVolume()
	{
		return self::FOUR_OVER_THREE * self::PI * pow($this->radius, 3); 
	}
}




?>