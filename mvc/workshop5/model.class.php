<?php

/**
* 
*/
class Model
{
	public $text;
	public $mesage;
	public $task;
	public $desc;
	public function __construct()
	{
		$this->text = 'Hello world!';
		$this->message = "This is a message.";
		//$this->task = '';
	}
}
?>