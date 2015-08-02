<?php

/**
 * 
 */
 class View
 {
 	private $model;
 	private $controller;

 	public function __construct(Controller $controller, Model $model)
 	{
 		$this->controller = $controller;
 		$this->model = $model;
 	}

 	public function output()
 	{
 		return '<a href="mvc.php?action=textclicked">' . $this->model->text . '</a>';
 	}

 	public function drawHeader ()
 	{
 		$htmlForm = "<!doctype HTML>";
 		$htmlForm = $htmlForm . "   <html> <head> <title>Oh, hai web</title> </head>";
 		$htmlForm = $htmlForm . "   <body> ";
 		echo $htmlForm;
 	}

  	public function drawScreen ()
 	{
 		$htmlForm = "<form method='POST' action='mvc.php'>";
 		$htmlForm = $htmlForm . "   <label for='newtask'>Task</label>";
 		$htmlForm = $htmlForm . "   <input type='text' name='newtask' /><br>";
 		// $htmlForm = $htmlForm . "   <input type='text' name='newtask' />";
 		$htmlForm = $htmlForm . "   <label for='newdesc'>Description</label>";
 		$htmlForm = $htmlForm . "   <input type='text' name='newdesc' />";
 		$htmlForm = $htmlForm . "   <input type='submit' value='Add New Task' />";
 		echo $htmlForm;
 	}
  	public function drawFooter ()
 	{
 		$htmlForm = "</form> </body> </html>";
 		echo $htmlForm;
 	}

 	public function listTasks()
 	{
 		echo "<h2>" . $this->model->task . "</h2>";
 		echo "<p>" . $this->model->desc . "</p>";
 	}
 } 

?>