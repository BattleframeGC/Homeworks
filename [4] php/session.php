<?php
session_start();
$session = $_SESSION;
$time = time();

$regenerate_time = $session['time'] < $time - 3600; 
$old_session = session_id();

if (isset($session['time']) && $regenerate_time)
{
    $_SESSION['time'] = time();
    session_regenerate_id();
    $new_session = session_id();
}

echo "<p>Старая сессия: $old_session</p>";
echo "<p>Новая сессия: $new_session</p>";