"use strict";

//[1] Задача на if
console.warn("[1] Задача на if");
let count = 75; // целочисленная переменная

     if(count >= 0 && count <= 39)    console.log("Попробуйте еще раз");
else if(count >= 40 && count <= 59)   console.log("Удовлетворительно");
else if(count >= 60 && count <= 89)   console.log("Хорошо");
else if(count >= 90 && count <= 100)  console.log("Отлично");
else                                  console.log("Попробуйте еще раз");


//[2] Задача на switch
console.warn("[2] Задача на switch");
let num1 = parseInt(prompt("Введите число #1"));
let num2 = parseInt(prompt("Введите число #2"));
let operator = prompt("Укажите оператор: +,-,*,/");

switch(operator)
{
    case "+": 
        console.log(`Сумма: ${num1}+${num2}=`+ (num1+num2)); 
        break;
    case "-": 
        console.log(`Разность: ${num1}-${num2}=`+ (num1-num2)); 
        break;
    case "*": 
        console.log(`Произведение: ${num1}*${num2}=`+ (num1*num2)); 
        break;
    case "/": 
        console.log(`Рез-т деления: ${num1}/${num2}="`+ (num1/num2)); 
        break;
}


//[3] Задача на цикл while
console.warn("[3] Задача на цикл while");

let plates = parseInt(prompt("Количество тарелок"));
let detergent = parseFloat(prompt("Количество средства"));

while(plates >= 0)
{
    if (plates > 0 && detergent == 0)
    {
        console.error(`Моющее средство закончилось! Осталось [${plates}] тарелок`);
        break;
    }
    if (plates == 0)
    {
        console.info(`Все тарелки вымыты! Осталось средства - [${detergent}]`);
        break;
    }
    
        plates--;
        detergent -= 0.5;
        
        console.log(`Средства: ${detergent}; Тарелок:  ${plates}`);
}


function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

//[4] Программа загадывает число в диапазоне
console.warn("[4] Программа загадывает число в диапазоне");
let getRandomInt = getRandom(1,9);
let userNum;

while( userNum != getRandomInt )
{
    userNum = parseInt(prompt(`Введите число от 1 до 9. (загадано ${getRandomInt})`));

    if( userNum == 0)
    {
        console.error("Выход из программы!");
        break;
    }
    
    if( userNum == getRandomInt)
    {
        console.warn(`Вы угадали! (${getRandomInt})`);
        break;
    }

    if( getRandomInt < userNum)
    console.error("Загаданное число меньше!");
    else if( getRandomInt > userNum)
    console.error("Загаданное число больше!");
}


//[5] * Задача на Math.random() и if.
console.warn("[5] * Задача на Math.random() и if.");
getRandomInt = getRandom(10,500);

if(getRandomInt >= 25 && getRandomInt <= 200)
    console.info(`Число ${getRandomInt} содержится в интервале (25;200)`);
else
    console.error(`Число ${getRandomInt} не содержится в интервале (25;200)`);
