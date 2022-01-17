<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Загрузка файлов на сервер</title>
</head>
<body>

<form action="post.php" method="post" enctype="multipart/form-data">
    <input type="text" name="user_name">
    <input type="file" name="attachments[]" accept="image/*" multiple > 
    <input type="submit" value="Отправить">
</form>

</body>
</html>