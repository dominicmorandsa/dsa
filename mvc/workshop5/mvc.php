<?php

include ('model.class.php');
include ('view.class.php');
include ('controller.class.php');

$model = new Model();
//echo $model->text;

$controller = new Controller($model);
$view = new View($controller, $model);

// if ($_POST['newtask']) {
// 	echo "true";
// } else {
// 	echo "false";
// }


if (isset($_POST['newtask']) && $_POST['newtask']) {
	$taskToAdd = $_POST['newtask'];
	$controller->addTask($taskToAdd);
	$descToAdd = $_POST['newdesc'];
	$controller->addDesc($descToAdd);
} else {
	echo '<h3>Please enter a value.</h3>';
}

//echo $view->output();
echo $view->drawHeader();
echo $view->drawScreen();
echo $view->drawFooter();
echo $view->listTasks();

?>