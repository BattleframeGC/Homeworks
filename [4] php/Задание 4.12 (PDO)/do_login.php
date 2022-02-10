<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] !== 'POST')
{
    header("Location: index.php");
}

require_once 'engine/dbconnect.php';
$post = $_POST;
$login = $post['login'];
//$password = $post['password'];
$password = md5(md5($post['password']));

$connection = db::getInstance()->getConnection();
$sql = "SELECT * FROM users WHERE (username = :data_login OR email = :data_login  OR phone = :data_login ) AND password = :data_pass";
$params = ['data_login' => $login, 'data_pass' => $password];

try
{
    $statement = $connection->prepare($sql);
    $statement->execute($params);
    $result = $statement->fetch();

    if ($result > 0)
    {
        $_SESSION['login'] = $result['username'];
        echo 'OK';
    }
    else
    {
        echo 'FAIL';
    }
}
catch(PDOException $e)
{
    echo $e->getMessage();
}

