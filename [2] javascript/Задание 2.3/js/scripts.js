"use strict";

function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getMinMaxOfArray(minmax, Array) {

    if (minmax === "max")
        return Math.max.apply(null, Array);

    return Math.min.apply(null, Array);
}


//[1] Задачание 1
console.warn("[1] Задачание 1");
let nums = [
    [23, 56, 75, -90, 123],
    [17, 0, -6429, -122],
    [19, 86, 55, -3, 900, 0, 0],
    [4, 9, -2]
];
let summ = 0;
let count = 0;

for (let arr of nums) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] += 10;
        summ += arr[i];
        count++;
    }
}
let average = summ / count;
console.log("Чисел: " + count);
console.log("Сумма: " + summ);
console.log("Среднее: " + average);


//[2] Задачание 2
console.warn("[2] Создать массив из целых чисел, заполнить массив семью рандомными значениями....");
let arr = [];

for (let i = 0; i < 7; i++) {
    arr[i] = getRandom(5, 300);
}
let getMax = getMinMaxOfArray("max", arr)
let getMin = getMinMaxOfArray("min", arr)
console.log(arr);
console.log("MAX: " + getMax);
console.log("MIN: " + getMin);

let idMax = 0;
let idMin = 0;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] == getMax)
        idMax = i;

    if (arr[i] == getMin)
        idMin = i;
}
arr[idMax] = getMin;
arr[idMin] = getMax;

console.log(arr);


//[3] Создать массив из целых чисел. Отрицательные элементы массива перенести в новый массив.
console.warn("[3] Создать массив из целых чисел. Отрицательные элементы массива перенести в новый массив.");
nums = [-70, -15, -7, 12, 141, 31];
console.log("Массив:")
console.log(nums)



let newNums = [];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
        newNums.push(nums[i]);
        nums.splice(i, 1);
        i--;
    }
}
console.log("Положительный массив:")
console.log(nums)
console.log("Отрицательный массив:")
console.log(newNums);


//[4] Написать программу, которая будет запрашивать у пользователя логин до тех пор, пока он не введет логин из массива
console.warn("[4] Написать программу, которая будет запрашивать у пользователя логин до тех пор, пока он не введет логин из массива");
let names = ["Xodahe", "Gixath", "Qexeme", "Bolyky", "Fifiwu"];
let input;
while (!names.includes(input)) {
    input = prompt("Требуется логин:");
}
console.log("Успех! [" + input + "]");


//[5] Написать программу, которая запрашивает у пользователя логин и помещает его в массив, если там еще нет такого логина.
console.warn("[5] Написать программу, которая запрашивает у пользователя логин и помещает его в массив, если там еще нет такого логина.");
names = ["Xodahe", "Gixath", "Qexeme", "Bolyky", "Fifiwu"];
input = prompt("Придумайте логин");
while (names.includes(input)) {
    input = prompt("Логин уже есть в массиве. Поридумайте другой!");
}
names.push(input);
console.log("Успех! Логин записан в массив: [" + input + "]");
console.info("Новый массив:");
console.log(names);