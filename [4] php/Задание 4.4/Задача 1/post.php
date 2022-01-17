<?php
$post = $_POST;
$filesArr = $_FILES;

$files_dir = 'files/';

if (!file_exists($files_dir)) {
    mkdir($files_dir, 0777, true);
}

function RemapArray($name, $type, $tmp_name, $error, $size)
{
    return array(
        'name' => $name,
        'type' => $type,
        'tmp_name' => $tmp_name,
        'error' => $error,
        'size' => $size,
    );
}

$files = array_map('RemapArray', 
    (array)$filesArr['attachments']['name'], 
    (array)$filesArr['attachments']['type'], 
    (array)$filesArr['attachments']['tmp_name'], 
    (array)$filesArr['attachments']['error'], 
    (array)$filesArr['attachments']['size'], 
    (array)$filesArr['attachments']['size']
);

function checkExt($name)
{
    $ext = strtolower(pathinfo($name, PATHINFO_EXTENSION));
    if (in_array($ext, array(
        'jpg',
        'jpeg',
        'png',
        'gif',
        'bmp'
    )))
    {
        return 1;
    }
    return 0;
}

function checkSize($size, $error)
{
    $maxFileSize = 1 * 1024 * 1024; // Ограничение на 1мб
    if ($size < $maxFileSize && $error != 1 && $error != 2)
    {
        return 1;
    }
    return 0;
}

function getSalt($name)
{
    $chars = 'abdefhiknrstyzABDEFGHKNQRSTYZ23456789';
    $numChars = strlen($chars);
    $rnd = '';
    for ($i = 0;$i < 8;$i++)
    {
        $rnd .= substr($chars, rand(1, $numChars) - 1, 1);
    }

    return md5($rnd . $name);
}

foreach ($files as $key => $file)
{
    $name = $file['name'];
    $size = $file['size'];
    $error = $file['error'];

    if (!isset($name))
    {
        echo '<p>- Пустое имя файла</p>';
        continue;
    }

    if (!checkExt($name))
    {
        echo "<p>- Файл <b>\"$name\"</b> содержит недопустимое расширение</p>";
        continue;
    }

    if (!checkSize($size, $error))
    {
        echo "<p>- Размер файла <b>\"$name\"</b> более 1мб</p>";
        continue;
    }

    if ($error > 0)
    {
        switch ($error)
        {
            case 1: // Превысил значение upload_max_filesize
                
            case 2: // Превысил значение MAX_FILE_SIZE
                echo "<p>- Размер файла <b>\"$name\"</b> превысил максимально допустимый размер</p>";
            break;
            case 3:
                echo "<p>- Файла <b>\"$name\"</b> загружен не полностью</p>";
            break;
            case 4:
                echo "<p>- Файла <b>\"$name\"</b> не был загружен</p>";
            break;
            case 6: // Отсутствует временная папка
                
            case 7: // Не удалось записать файл на диск.
                
            case 8: // Модуль PHP остановил загрузку файла
                echo "<p>- Ошибка загрузки файла <b>\"$name\"</b>. Повторите попытку позже.</p>";
            break;
        }
        continue;
    }

    $tmp_name = $file['tmp_name'];
    $file_name = microtime() . $name;

    $ext = pathinfo($name, PATHINFO_EXTENSION);
    $new_name = getSalt($file_name) . ".$ext";

    // move_uploaded_file(from, to)
    if (move_uploaded_file($tmp_name, "files/$new_name"))
    {
        echo "<p>+ Файл <b>\"$name\"</b> успешно загружен! (<b>\"$new_name\"</b>)</p>";
    }
    else
    {
        echo "<p>+ Файл <b>\"$name\"</b> не был загружен!</p>";
    }

}

