<?php
/**
* 
*/
class Setup
{
	private $s_radius = 5;
	private $c_radius = 6;
	private $c_width = 7;
	private $r_width = 8;
	
	public function __construct()
	{
		//echo "creating a Setup<br>";
	}

	public function setup()
	{
		$s = new Sphere;
		$s->setColour('scarlet');
		echo "<br>Sphere is  ", $s->getColour();
		$c = new Circle;
		$c->setColour('cerise');
		echo "<br>Circle is  ", $c->getColour();
		$r = new Rectangle;
		$r->setColour('red');
		echo "<br>Rectangle is  ", $r->getColour();
		$b = new Cube;
		$b->setColour('blue');
		echo "<br>Cube is  ", $b->getColour();

		$s->setRadius($this->s_radius);
		echo "<br>", $s->getDiameter();
	}

}

?>