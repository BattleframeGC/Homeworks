<?php
require_once '../lib/command_interface.php';

class CurrentTime implements CommandInterface {

    public function getName()
    {
        return 'time';
    }

    public function execute()
    {
        $today = date("d.m.Y [H:i:s]"); 
        echo "Текущее время: ". $today;
    }

    public function help()
    {
        return 'Вывод текущего времени';
    }
}