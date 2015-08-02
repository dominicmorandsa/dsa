<?php 

function calcOrDef($value='stet')
{
	if ($value == 'stet') {
		return "...no change...";
	} else {
		return $value + 2;
	}


}

echo "Calling with no parameter value: " . calcOrDef();
echo "<br>";
echo "Calling with default parameter value: " . calcOrDef('stet');
echo "<br>";
echo "Calling with non-default parameter value: " . calcOrDef(2);


?>