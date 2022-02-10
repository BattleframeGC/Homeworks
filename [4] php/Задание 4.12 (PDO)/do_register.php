<?php
$post = $_POST;

if ($post['password'] != $post['password2'])
{
    echo 'Пароли не совпадают!';
    header("Refresh:3; url=index.php?do=registration");
}
require_once 'engine/dbconnect.php';

$connection = db::getInstance()->getConnection();

$query = 'INSERT IGNORE INTO users (username,email,phone,password) VALUES (:data_user, :data_email, :data_phone, :data_pass)';
$params = [
  'data_user' => $post['username'], 
  'data_pass' => md5(md5($post['password'])), 
  'data_email' => $post['email'], 
  'data_phone' => $post['phone']
];
try
{
    $sql = "SELECT COUNT(*) AS num FROM `users` WHERE username = ?";
    $stmt = $connection->prepare($sql);
    $stmt->execute([$post['username']]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($row['num'] > 0)
    {
        echo 'Пользователь с таким именем уже существует!';
        header("Refresh:3; url=index.php?do=registration");
    }
    else
    {
        $statement = $connection->prepare($query);
        $statement->execute($params);
        $result = $statement->fetch(PDO::FETCH_BOUND);

        echo 'Поздравляем! Вы зарегистророваны в системе!';
        header("Refresh:3; url=index.php");
    }

}
catch(PDOException $e)
{
    echo $e->getMessage();
}

