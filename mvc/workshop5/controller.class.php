<?php

/**
* 
*/
class Controller
{
	private $model;
	function __construct(Model $model)
	{
		$this->model = $model;
	}

	public function textClicked()
	{
		$this->model->text = 'Text Updated';
	}

	public function addTask($task)
	{
		$this->model->task = $task;
	}

	public function addDesc($desc)
	{
		$this->model->desc = $desc;
	}
}

?>