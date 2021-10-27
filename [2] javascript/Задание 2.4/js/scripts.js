"use strict";


//[1] Напишите функцию, которая в зависимости от переданного в нее целочисленного аргумента count, будет возвращать слово "товар" в правильной форме
function product(count)
{
	let num100 = Math.abs(count) % 100; 
    let num10 = num100 % 10;

	if (count > 10 && count < 20)    return "товаров";
	if (num10 > 1 && num10 < 5)      return "товара";
	if (num10 == 1)                  return "товар";

	return "товаров";
}

//[2] Функция возвращает массив, который содержит все числа из диапазона, включая начальное и конечное
function range(first, last, step = 1) 
{
    var arr = [];
  
      for (var i = first; i <= last; i += step)
      arr.push(i);

    return arr;
}


console.warn("[1] Напишите функцию, которая в зависимости от переданного в нее целочисленного аргумента count, будет возвращать слово товар в правильной форме");
    let count = 44;
    console.log(count + " " + product(count));

console.warn("[2] Функция возвращает массив, который содержит все числа из диапазона, включая начальное и конечное");
    console.log(range(1, 10, 2));


    
//[2] [3] Написать код - ответы на следующие вопросы
console.warn("[3] Написать код - ответы на следующие вопросы");

console.info("1) как проверить значение на определенный тип данный?");
        let ask = typeof "foo";
        console.log(ask);
        
console.info("2) как проверить, что значение переменной было присвоено?");
        let param = "переменная";
        if (param)
        {
            console.log("Переменная 'param' объявлена");
        }
        else
        {
            console.log("Переменная 'param' пуста!");
        }
        
console.info("3) как проверить значение на число?");

        let someParam = "значение";

        if(!isNaN(someParam)) 
            console.log("someParam - это число");
        else
            console.log("someParam - НЕ число");