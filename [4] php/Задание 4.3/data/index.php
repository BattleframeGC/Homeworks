<?php

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
	$data = require_once 'items-data.php';
	echo json_encode($data,1);
}
else if ($_SERVER['REQUEST_METHOD'] === 'POST')
{
    $post = $_POST;
    $login = $post['login'];
    $password = $post['password'];

    function auth(string $login, string $pass) 
    {
        if ($login !== "qwe" || $pass !== '123') return 0;
		return 1;
    }
	echo auth($login,$password);
}