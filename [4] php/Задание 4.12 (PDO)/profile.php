<?php
session_start();
if (!isset($_SESSION['login']))
{
    header('Location: index.html');
}
$login = $_SESSION['login'];
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Профиль пользователя</title>
</head>
<body>
<p>Доброго времени суток, <b><?=$login
?></b></p>
</body>
</html>
