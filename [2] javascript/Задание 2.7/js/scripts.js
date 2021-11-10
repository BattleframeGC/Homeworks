"use strict";

let goods = { 
    piano: { 
       title: "Пианино", 
       price: 3000, 
       count: 25 
    }, 
    guitar: { 
       title: "Гитара", 
       price: 1200, 
       count: 40 
    },
    drum: { 
       title: "Барабаны", 
       price: 2700, 
       count: 12 
    }, 
    flute: { 
       title: "Флейта", 
       price: 900, 
       count: 50 }, 
    harp: { 
       title: "Арфа", 
       price: 3400, 
       count: 5 
    } 
 };

 let books = [
    { author: 'Пушкин', title: 'Пир во время чумы'}, 
    { author: 'Толстой', title: 'Война и мир'}, 
    { author: 'Лермонтов', title: 'Тамань'}, 
    { author: 'Гончаров', title: 'Обломов'}, 
    { author: 'Лермонтов', title: 'Герой Нашего Времени'}, 
    { author: 'Пушкин', title: 'Руслан и Людмила'}, 
    { author: 'Лермонтов', title: 'И скучно, и грустно'},
 ];

 //[1] Написать функцию, которая принимает на вход объект obj (например, goods), число from и число to.....
console.warn("[1] Написать функцию, которая принимает на вход объект obj (например, goods), число from и число to.....");

function priceFilter(obj, from, to) {

    if (typeof obj !== "object" || isNaN(from) || isNaN(to)) 
        return false;

    let filter = {};

    for (let key in obj) 
    {
        if (obj[key].price >= from && obj[key].price < to) 
            filter[key] = obj[key];
    }
    return filter;
}
console.log(priceFilter(goods, 2000, 4000));

//[2] Написать функцию, которая принимает на вход объект obj (например, goods), название (title) и количество (countToCart). .....
console.warn("[2] Написать функцию, которая принимает на вход объект obj (например, goods), название (title) и количество (countToCart). .....");
function goodFilter(obj, title, countToCart) 
{
    if (typeof obj !== "object" || typeof title !== "string" || typeof countToCart !== "number")
        return false;

    for (let key in obj) 
    {
        if (obj[key].title == title) 
        {
            if (obj[key].count >= countToCart) 
            {
                obj[key].count -= countToCart;
                console.log(obj[key]);
                return true;
            }
            else 
            {
                console.log("Недостаточно товара на складе. Укажите другое количество!");
                return false;
            }
        }
    }
}
console.log(goodFilter(goods, "Барабаны", 5));

//[3] Написать функцию, которая принимает на вход объект obj (например, books) и автора (author).....
console.warn("[3] Написать функцию, которая принимает на вход объект obj (например, books) и автора (author).....");
function booksByAuthor(obj, author) 
{
    let books = [];

    for (let array of obj) 
    {
        if (array.author == author) 
            array.push(array.title);
    }
    return books;
}
console.log(booksByAuthor(books, "Лермонтов"));