<?php
/**
* 
*/
class Circle extends Shape
{
	const PI = 3.14159;

	private $radius;

	public function __construct()
	{
		parent::__construct();
		//echo "creating a Circle<br>";
	}

	public function setRadius($value)
	{
		$this->radius = $value;
	}

	public function getRadius()
	{
		return $this->radius;
	}

	public function getDiameter()
	{
		return $this->radius * 2;
	}

	public function getArea()
	{
		return 2 * self::PI * pow($this->radius, 2);
	}

}

?>