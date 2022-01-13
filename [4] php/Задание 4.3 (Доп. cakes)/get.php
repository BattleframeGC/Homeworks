<?php

if ($_SERVER['REQUEST_METHOD'] === 'GET') 
{
	$get = $_GET;
	$id = $get['id'];
	
	$cakes = require_once 'cakes_data.php';

	foreach ($cakes as $cake)
	{
		if($id == $cake['id']){
			echo json_encode($cake,1);
			break;
		}
	}
}