<?php
require_once '../lib/command_interface.php';

class FourPDA implements CommandInterface {

    public function getName()
    {
        return 'bash';
    }

    public function execute()
    {
        $url = "https://4pda.to/feed/"; 
        $rss = simplexml_load_file($url); 
        $lastItem = $rss->channel->item[0];

        echo $lastItem->title."\n". $lastItem->description;
    }

    public function help()
    {
        return 'Вывод последнего поста с 4pda';
    }
}