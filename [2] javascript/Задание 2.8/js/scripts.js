"use strict";

//[1] Задача №1
console.warn("[1] Задача №1");
let db = new Map();

db.set("Павел", "Тверь")
db.set("Олег", "Москва")
db.set("Максим", "Тверь")
db.set("Евгения", "Санкт-Петербург");
db.set("Алексей", "Тверь");
db.set("Клара", "Хабаровск");

function userByCity(map, city) 
{
    if (typeof(city) !== "string")
        return console.error("В качестве города должна передаваться строка!");

    if (!(map instanceof Map))
        return console.error("Передаваемое значение не принадлежит к типу Map");

    let logins = [];
    for (let user of map) {
        if (user[1].toLowerCase() === city.toLowerCase())
            logins.push(user[0]);
    }

    console.log(logins);
    return logins;
}
userByCity(db, "Тверь");

//[2] Задача №2
console.warn("[2] Задача №2");

function findRepeat(...words) 
{
    let repeats = new Map();

    for (let word of words) {
        if (typeof(word) !== "string")
            return console.error("В функцию можно передавать только строки!");

        let wordL = word.toLowerCase(); // снизить нагроможжение кода
        repeats.set(wordL, (repeats.has(wordL)) ? (repeats.get(wordL) + 1) : 1);
    }
    console.log(repeats);
}
findRepeat("ночь", "Улица", "фонарь", "Аптека", "Ночь", "нОЧь");

//[3] Задача №3
console.warn("[3] Задача №3");

let customerMap = new Map();
customerMap.set(45, {name: "Павел", id: 45, age: 23});
customerMap.set(87, {name: "Олег", id: 87, age: 45});
customerMap.set(91, {name: "Максим", id: 91, age: 18});
customerMap.set(99, {name: "Евгения", id: 99, age: 66});
customerMap.set(101, {name: "Алексей", id: 101, age: 34});
customerMap.set(112, {name: "Клара", id: 112, age: 39});

function newCustomerMap(db, ageFrom, ageTo) 
{
    if (typeof(ageFrom) !== "number" || typeof(ageTo) !== "number")
        return console.error("В качестве возраста должны передаваться числовые значения!");

    if (!(db instanceof Map))
        return console.error("Передаваемое значение db не принадлежит к типу Map");

    let filter = new Map();
    for (let [id, customer] of db.entries()) {
        if (customer.age >= ageFrom && customer.age < ageTo)
            filter.set(id, customer);
    }
    console.log(filter);
    return filter;
}
newCustomerMap(customerMap, 0, 50);