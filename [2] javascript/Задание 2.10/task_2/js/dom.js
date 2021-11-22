"use strict";


// items-section: Добавить изображения после h2

let images = [
    "https://picsum.photos/1000/1000?random=1",
    "https://picsum.photos/1000/1000?random=2",
    "https://picsum.photos/1000/1000?random=3"
];

let itemsTitles = document.getElementsByClassName("item_title");
// let itemsTitles = document.querySelectorAll(".item_title");
console.log(itemsTitles);
// HTMLCollection[h2, h2, h2]
for (let i = 0; i < itemsTitles.length; i++) {
    let img = document.createElement("img");
    img.setAttribute("src", images[i]);
    img.classList.add("item__image");
    itemsTitles[i].after(img);
}

// items-section: уменьшить стоимость в два раза
/*
let prices = document.querySelectorAll(".item__price");
prices = Array.from(prices);
prices.forEach((span) => span.innerText = span.innerText / 2);
*/

Array.from(document.querySelectorAll(".item__price"))
    .forEach((span) => span.innerText = span.innerText / 2);

// [span, span, span]
let spans = document.querySelectorAll(".item__price");

let fn = function (element/*, index, arr*/) {
    element.innerText = element.innerText / 2;
};

for (let i = 0; i < spans.length; i++){
    // fn(spans[i], i, spans);
    spans[i].innerText = spans[i].innerText / 2;
}

// cards-section: отобразить информацию о товарах,
// информацию о каждом товаре отображать в отдельном div:
/*
<div class="card">
    <h2></h2> название
    <img class="card__image" src=""> изображение
    <p></p> стоимость
    <div class="card__count-info">
        <button>-</button>
        <span>0</span> если значение count равно 0, вывести в div - Нет в наличии
        <button>+</button>
    </div>
</div>
*/


let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 0,
        img: "https://picsum.photos/id/345/1000"
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40,
        img: "https://picsum.photos/id/988/1000"
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12,
        img: "https://picsum.photos/id/123/1000"
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 0,
        img: "https://picsum.photos/id/162/1000"
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5,
        img: "https://picsum.photos/id/163/1000"
    }
};
/*
<div class="card">
    <h2></h2> название
    <img class="card__image" src=""> изображение
    <p></p> стоимость
    <div class="card__count-info">
     <button>-</button>
      <span>0</span> если значение count равно 0, вывести в div - Нет в наличии
      <button>+</button>
    </div>
</div>

*/
let cardsSection = document.querySelector(".cards-section");
// [{}, {}, {}, {}, {}]
Object.values(goods).forEach((obj)=>{
    let card = document.createElement("div");
    card.classList.add("card");

    let title = document.createElement("h2");
    title.innerText = obj.title;

    let img = document.createElement("img");
    img.classList.add("card__image");
    img.setAttribute("src", obj.img);

    let price = document.createElement("p");
    price.innerText = `${obj.price} руб.`;
    /*<div class="card__count-info">
        <button>-</button>
        <span>0</span> если значение count равно 0, вывести в div - Нет в наличии
        <button>+</button>
    </div>*/
    let count = document.createElement("div");
    count.classList.add("card__count-info");
    count.setAttribute('count', obj.count);
    if (obj.count > 0) {
        count.innerHTML = `
            <button class="minus">-</button>
            <span>0</span>
            <button class="plus">+</button>
        `;
    } else {
        count.innerHTML = "<span>Нет в наличии</span>";
    }
    card.append(title, img, price, count);
    cardsSection.append(card);
});


// books-section: отобразить информацию о книгах
/*
для каждого жанра отдельный div:
<div>
    <h2></h2> название жанра
    <div class="books"> все книги одного жанра
        <article> книга
            <span></span> название книги
            <img> обложка
            <p></p> описание
            <a>Читать</a>
        </article>
    </div>
</div>
*/
let booksByGenre = [
    {
        genreName: "Crafts",
        books: [
            {
                id: 8,
                title: "Lorem ipsum",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non nulla " +
                    "optio quae quod quos repudiandae rerum, tempore",
                img: "https://picsum.photos/1000/1000?random=20"
            },
            {
                id: 10,
                title: "Aliquam consequatur",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur " +
                    "ea fugit inventore laudantium natus",
                img: "https://picsum.photos/1000/1000?random=21"
            },
            {
                id: 34,
                title: "Laudantium",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
                    "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus, necessitatibus " +
                    "non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
                img: "https://picsum.photos/1000/1000?random=22"
            }
        ]
    },
    {
        genreName: "Thriller",
        books: [
            {
                id: 4,
                title: "Necessitatibus",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non" +
                    " nulla optio quae quod quos repudiandae rerum, tempore",
                img: "https://picsum.photos/1000/1000?random=23"
            },
            {
                id: 13,
                title: "Nulla optio quae quod",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur ea " +
                    "fugit inventore laudantium natus",
                img: "https://picsum.photos/1000/1000?random=24"
            },
            {
                id: 59,
                title: "Non nulla",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
                    "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus," +
                    " necessitatibus non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
                img: "https://picsum.photos/1000/1000?random=25"
            }
        ]
    }
];

/*<div>
    <h2></h2> название жанра
    <div class="books"> все книги одного жанра
        <article> книга
            <span></span> название книги
            <img> обложка
            <p></p> описание
            <a>Читать</a>
        </article>
    </div>
</div>*/
function addBooks(booksArr, element){
    // перебор booksArr:
        // создать div
        // создать h2
        // создать div class="books"
        // добавить h2 и div class="books" в div
        // перебор booksArr.books
            // создать article, добавить содержимое через innerHTML
            // добавить article в div

}


function generateTable(arr){
    // создание table
    for (let key in arr[0]) {
        // в переменной key - названия свойств
        // первый ряд таблицы (заголовки)
    }

    // генерация рядов (один объект - один ряд)
    for (let obj of arr) {
        // создание ряда
        for (let key in obj) {
            // создание ячейки
            // текст ячейки: obj[key]
        }
    }
    // добавить таблицу в html
}

let arr = ["text", "str", "value"];
let str = "text";
str = str.toLowerCase();
// arr.foreach(elem => elem.toLowerCase());

for (let word of arr) {
    if (str === word.toLowerCase()) {
        //
    }
}