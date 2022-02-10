<?php
class db
{
    private static $instance;
    private $connection;

    private function __construct($dbconfig = 'dbconfig.php')
    {
        $db = require_once $dbconfig;
        $DBHOST = $db['DBHOST'];
        $DBPORT = $db['DBPORT'];
        $DBUSER = $db['DBUSER'];
        $DBPASS = $db['DBPASS'];
        $DBNAME = $db['DBNAME'];
        $options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];
        $this->connection = new PDO("mysql:host=$DBHOST;port=$DBPORT;dbname=$DBNAME", $DBUSER, $DBPASS, $options);
    }

    public static function getInstance($dbconfig = 'dbconfig.php')
    {
        if (self::$instance == null) self::$instance = new db($dbconfig);
        return self::$instance;
    }

    public function getConnection()
    {
        return $this->connection;
    }

}

