<?php
 $items = [
     [
         'id' => 1,
         'title' => 'Flute',
         'price' => 20000,
         'img' => 'flute.jpg',
         'description' => [
             'color' => 'white',
             'material' => 'bamboo'
         ]
     ],
     [
         'id' => 2,
         'title' => 'Guitar',
         'price' => 18000,
         'img' => 'guitar.jpg',
         'description' => [
             'color' => 'brown',
             'material' => 'linden'
         ]
     ],
     [
         'id' => 3,
         'title' => 'Drum',
         'price' => 68000,
         'img' => 'drum.jpg',
         'description' => [
             'color' => 'brown',
             'material' => 'steel'
         ]
     ],
 ];
?>

<!DOCTYPE html>
<html lang="ru">
   <head>
      <meta charset="UTF-8">
      <title>PHP. Домашнее задание 2</title>
      <link rel="stylesheet" href="css/style.css" />
      <link rel="stylesheet" href="css/flex-grid.css" />
   </head>
   <body>
      <section class="items-section">
         <div class="container col-12">
            <div class="items">

<?php
// Вывод через HEREDOC. Приемлем ли подобный вариант?
/*
foreach ($items as $item)
{
echo <<<ITEM
        <article class="col-4 post">
          <h2>{$item['id']}. {$item['title']}</h2>
          <img src='images/{$item['img']}'>
          <p>Цена: {$item['price']}</p>
          <p>Цвет: {$item['description']['color']}</p>
          <p>Материал: {$item['description']['material']}</p>
        </article>
ITEM;
}
*/
?>

<!-- Вывод через Альтернативный синтаксис -->
<?php foreach ($items as $item): ?>
    <article class="col-4 post">
      <h2><?= $item['id']?>. <?= $item['title']?></h2>
      <img src='images/<?= $item['img']?>'>
      <p>Цена: <?= $item['price']?></p>
      <p>Цвет: <?= $item['description']['color']?></p>
      <p>Материал: <?= $item['description']['material']?></p>
    </article>
<?php endforeach; ?>

            </div>
         </div>
      </section>
   </body>
</html>