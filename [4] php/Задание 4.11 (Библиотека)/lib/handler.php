<?php

class Executor
{
    private $commands;

    public function __construct($commands)
    {
        $this->commands = $commands;
    }

    private function cmdData($name) 
    {
        $file = '../commands/' . $name . '.php';
        require_once $file;
        $obj = new $name;
        return $obj;
    }

    public function executeCmd($args)
    {
        $cmd = $args[1];

            if ($cmd === 'list') 
            {
                foreach ($this->commands as $key => $command) 
                {
                    $command = $this->cmdData($command);
                    echo "- [$key]". ': ' . $command->help() . PHP_EOL;
                }
                return;
            }

            if (in_array($cmd, array_keys($this->commands))) 
            {
                $command = $this->cmdData($this->commands[$cmd]);
                
                if (isset($args[2]) && $args[2] === 'help') 
                {
                    echo $command->help();
                } 
                else 
                {
                    $command->execute();
                }
            } 
            else 
            {
                echo 'Введена неверная команда - ' . $args[0] . '! Используйте list для вывода доступных команд!';
            }
    }

}