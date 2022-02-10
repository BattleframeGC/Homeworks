<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Авторизация</title>
</head>
<body>
<?php if(isset($_GET['do']) && $_GET['do']=="registration")
{ 
?>
    <form method="post" action="do_register.php">
        <input type="text" name="username" placeholder="Имя пользователя" required>
        <input type="text" name="email" placeholder="Email" required>
        <input type="text" name="phone" placeholder="Номер телефона" required>
        <input type="password" name="password" placeholder="Пароль" required>
        <input type="password" name="password2" placeholder="Подтвердите пароль" required>
        <input type="submit" value="Зарегистрироваться">
    </form>
<?php 
}
else
{ 
?>
    <form method="post" name="auth">
        <input type="text" name="login" placeholder="Логин, почта или номер телефона" required>
        <input type="password" name="password" placeholder="Пароль" required>
        <input type="submit" value="Авторизоваться">
    </form>
    <p id="info"></p>
    <a href="?do=registration">Зарегистрироваться</a>
    
<script src="js/auth.js"></script>
<?php } ?>

</body>
</html>
</body>