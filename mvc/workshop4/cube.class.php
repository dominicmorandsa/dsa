<?php
/**
* 
*/
class Cube extends Shape
{

	private $width;

	public function __construct()
	{
		parent::__construct();
		//echo "creating a Cube<br>";
	}

	public function setWidth($the_width)
	{
		$this->width = $the_width;
	}

	public function getWidth()
	{
		return $this->width;
	}


	public function getArea()
	{
		return 6 * pow($this->width, 2);
	}

	public function getVolume()
	{
		return pow($this->width, 3); 
	}
}




?>