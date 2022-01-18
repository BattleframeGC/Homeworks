<?php
$post = $_POST;
$url = trim($post['link']);
$md5 = md5($url);
$unix_time = time();

if (!filter_var($url, FILTER_VALIDATE_URL, FILTER_FLAG_PATH_REQUIRED)) {
    exit("Ссылка не прошла валидацию!");
}

function getSalt($url)
{
    $chars = 'abdefhiknrstyzABDEFGHKNQRSTYZ23456789';
    $numChars = strlen($chars);
    $rnd = '';
    for ($i = 0; $i < 8; $i++) {
        $rnd .= substr($chars, rand(1, $numChars) - 1, 1);
    }
    return substr(md5($rnd . $url), 0, 8);
}

$file_DB = 'data.json';

if (!file_exists($file_DB)) {
    file_put_contents($file_DB, '{}');
}

$data = file_get_contents('data.json');
$urlsList = json_decode($data, true);

if (isset($urlsList[$md5]) && $urlsList[$md5]['time'] > $unix_time) {
    echo "http://mysite/" . $urlsList[$md5]['link'];
} else {
    $value = getSalt($md5);

    while (in_array($value, $urlsList)) {
        $value = getSalt($md5);
    }

    $urlsList[$md5]['link'] = $value;
    $urlsList[$md5]['time'] = $unix_time + 60; // Время жизни 1 минута

    file_put_contents($file_DB, json_encode($urlsList));
    echo "http://mysite/" . $value;
}
