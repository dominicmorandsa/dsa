<?php
/**
* 
*/
class Rectangle extends Shape
{

	private $width;
	private $height;

	public function __construct()
	{
		parent::__construct();
		//echo "creating a Rectangle<br>";
	}

	public function setWidth($the_width)
	{
		$this->width = $the_width;
	}

	public function getWidth()
	{
		return $this->width;
	}

	public function setHeight($the_height)
	{
		$this->height = $the_height;
	}

	public function getHeight()
	{
		return $this->height;
	}

	public function getArea()
	{
		return $this->width * $this->height;
	}


}

?>