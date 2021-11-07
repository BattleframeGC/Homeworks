"use strict";

console.warn("[1] Создать функцию, которая принимает на вход число от 1(понедельник) до 7(воскресенье), а возвращает день недели на русском языке");
let returnDay = (num) => 
{
    switch (num) 
    {
        case 1:  return "понедельник";
        case 2:  return "вторник";
        case 3:  return "среда";
        case 4:  return "четверг";
        case 5:  return "пятница";
        case 6:  return "суббота";
        case 7:  return "воскресенье";
        default: return "Укажите число от 1 до 7";
    }
}
console.log(returnDay(4));

console.warn("[2] Написать функцию, котора добавляет в массив значение, только, если его не существует");
let array = ["Апрель", "Июль", "Октябрь", "Май"];
function add(name,array)
{
    if (!array.includes(name))
    array.push(name);

    return array;
}
console.log(add("Апрель", array));
console.log(add("Февраль", array));


console.warn("[3] Написать функцию, которая возвращает не более 3 случайных элементов из переданного в нее массива.");
function random(array)
{
    const shuffle = array.sort(() => 0.5 - Math.random());
    return shuffle.slice(0, 3);
}
let rndArray = [3, 90, 5, -100, 50, 0, 560, 1];
console.log(random(rndArray));

console.warn("[4] Написать функцию, которая вернет самое длинное слово в предложении");
  let text = "самое длинное слово в предложении";

  function findWord(text) 
  {
    var words = text.split(' ');
    return words.sort((a, b) => b.length - a.length)[0];
  }
  console.log(findWord(text))


  console.warn("[5] Создать массив из пересечений использовать методы filter + includes");
  let first = ["Апрель", "Июль", "Октябрь", "Май"],
  second = ["Май", "Январь", "Декабрь", "Октябрь"];

  let intersection = first.filter(word => second.includes(word));
  console.log(intersection)

  
  console.warn("[6] Проверить, есть ли в массиве temps температура больше 500, вывести информацию об этом в консоль.");

  let temps = [
    [344, 241, 521, 344, 121],
    [111, 313, 351, 314],
    [134, 111, 452],
 ];

 for (let temp of temps) 
 {
    if (temp.some(t => t > 500)) 
    {
        console.log(`В массиве найдена температура больше 500`);
    }
 }
 
 console.warn("[7] НаПиСаТь ФуНкЦиЮ, кОтОрАя ПрИнИмАеТ нА вХоД сТрОкУ и ВоЗвРаЩаЕт НоВуЮ, в КоТоРоЙ вСе БуКвЫ сТрОчНыЕ, а ПеРвАя БуКвА зАгЛаВнАя.");

 let chaos = "НаПиСаТь ФуНкЦиЮ, кОтОрАя ПрИнИмАеТ нА вХоД сТрОкУ и ВоЗвРаЩаЕт НоВуЮ, в КоТоРоЙ вСе БуКвЫ сТрОчНыЕ, а ПеРвАя БуКвА зАгЛаВнАя.";

 function fixRegister(text)
 {
     return text[0].toUpperCase() + text.slice(1).toLowerCase();
 }
  console.log(fixRegister(chaos))