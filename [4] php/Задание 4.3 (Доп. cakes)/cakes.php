<?php
$cakes = require_once 'cakes_data.php';
?>
<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Тортики</title>
    <link rel="stylesheet" href="css/cakes.css">
</head>
<body>
<main>
    <?php foreach ($cakes as $cake): ?>
    <div class="cake">
        <h2><?= $cake['name'] ?></h2>
        <div>
            <img src="/images/<?= $cake['main_img'] ?>">
        </div>
        <p>Стоимость: <?= $cake['price'] . $cake['currency'] ?></p>
        <button class="js-open-modal" data-modal="info" data-id="<?= $cake['id'] ?>">Подробнее</button>
    </div>
    <?php endforeach; ?>
	
	     <div class="modal" data-modal="info">
            <svg class="modal__cross js-modal-close" viewBox="0 0 24 24"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg>
            <p class="modal__title"></p>
            <div class="modal__info"></div>
        </div>
        <div class="overlay js-overlay-modal"></div>
</main>
</body>
<footer>
    <script src="/js/cakes.js"></script>
</footer>
</html>
