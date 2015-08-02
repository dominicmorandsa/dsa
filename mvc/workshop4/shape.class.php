<?php
/**
* 
*/
class Shape
{
	private $colour;

	public function __construct()
	{
		$this->colour = 'black';
	}

	public function setColour($the_colour)
	{
		$this->colour = $the_colour;
	}

	public function getColour()
	{
		return $this->colour;
	}
}




?>