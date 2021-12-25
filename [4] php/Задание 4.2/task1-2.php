<?php
 $items = [
     [
         'id' => 1,
         'title' => 'Flute',
         'price' => 20000,
     ],
     [
         'id' => 2,
         'title' => 'Guitar',
         'price' => 18000,
     ],
     [
         'id' => 3,
         'title' => 'Piano',
         'price' => 68000,
     ],
     [
         'id' => 3,
         'title' => 'Piano New',
         'price' => 38000,
     ],
     [
         'id' => 3,
         'title' => 'Drum New',
         'price' => 18000,
     ],
     [
         'id' => 4,
         'title' => 'Drum',
         'price' => 68000,
     ],
 ];


//Сортировка по цене
    function sort_by_price($a, $b) 
    {
        if ($a['price'] == $b['price']) 
        {
            return 0;
        }
        return ($a['price'] < $b['price']) ? -1 : 1;
    }
    
    
//Сортировка по цене и названию
    function sort_by_price_title($a, $b) 
    {
        if ($a['price'] == $b['price']) 
        {
            if ($a['title'] == $b['title']) 
            {
                return 0;
            }
            return ($a['title'] < $b['title']) ? -1 : 1;
        }
        return ($a['price'] < $b['price']) ? -1 : 1;
    }


uasort($items, 'sort_by_price'); // Отсортировать массив 'price'

uasort($items, 'sort_by_price_title'); // Отсортировать массив по 'price', потом' по 'title'

foreach ($items as $item)
{
    echo "<p>{$item['title']} - {$item['price']}</p>";
}