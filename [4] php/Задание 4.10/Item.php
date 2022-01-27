<?php

class Item
{
    private $id; // не может быть отрицательным или 0
    private $title; // максимум 10 символов
    private $price; // не может быть отрицательным или 0
    private $material; // минимум 3 символа

    // свойства title и id являются обязательными,
    public function __construct(int $id, string $title)
    {
        if ($id < 0)  { throw new InvalidArgumentException('ID не может быть отрицательным'); }
        if ($id == 0) { throw new InvalidArgumentException('ID не может быть 0'); }
        
        if (mb_strlen($title) > 10) { 
            throw new InvalidArgumentException( 
                "Title - максимум 10 символов ($title)"); 
            }

        $this->id = $id; // setId
        $this->title = $title; // setTitle
    }


    // добавить все необходимые геттеры и сеттеры
    
    public function getId()
    {
        return $this->id;
    }

    public function getTitle()
    {
        return $this->title;
    }

    public function getPrice()
    {
        return $this->price;
    }
    
    public function getMaterial()
    {
        return $this->material;
    }
    
    public function setId(int $id): void
    {
        if ($id <= 0) { 
            throw new InvalidArgumentException(
                'ID не может быть отрицательным или равным 0');
            }
        $this->id = $id;
    }

    public function setTitle(string $title): void
    {
        if (strlen($title) > 10) { 
            throw new InvalidArgumentException(
                "Title - максимум 10 символов ($title)"); 
        }
        $this->title = $title;
    }


    public function setPrice(int $price) 
    {
        if ($price <= 0) {
            throw new InvalidArgumentException(
                'Price должен быть больше 0!'); 
            }
        $this->price = $price;
    }

    public function setMaterial(string $material) 
    {
        if (mb_strlen(trim($material)) < 3) { 
            throw new InvalidArgumentException(
                'В названии материала должно быть минимум 3 символа!');
            }
        $this->material = $material;
    }
}