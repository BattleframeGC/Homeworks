<?php
require_once 'Item.php';
require_once 'ItemStorage.php';

// создать объекты Item (товар) и ItemStore (хранилище),
$item_1 = new Item(1, 'нож');
$item_1->setMaterial('сталь');
$item_1->setPrice(8500);

$item_2 = new Item(2, 'лук');
$item_2->setMaterial('древесина');
$item_2->setPrice(18500);

$item_3 = new Item(3, 'арбалет');
$item_3->setMaterial('пластик');
$item_3->setPrice(24000);

$item_4 = new Item(4, 'подставка');
$item_4->setMaterial('нейлон');
$item_4->setPrice(600);

$item_5 = new Item(5, 'термос');
$item_5->setMaterial('сталь');
$item_5->setPrice(1600);

$item_storage = new ItemStorage();

// добавить товары в хранилище
$item_storage->add_item($item_1);
$item_storage->add_item($item_2);
$item_storage->add_item($item_3);
$item_storage->add_item($item_4);
$item_storage->add_item($item_5);

// вызвать методы поиска товаров в хранилище:
    // get_by_material,
    var_dump($item_storage->get_by_material('сталь', 'нейлон'));
    // get_by_price_and_material,
    var_dump($item_storage->get_by_price_and_material(5000, 'сталь'));
    // get_by_price
    var_dump($item_storage->get_by_price(10000, 30000));

    var_dump($item_storage);