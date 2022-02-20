<?php
interface CommandInterface 
{
    public function help();
    public function getName();
    public function execute();
}