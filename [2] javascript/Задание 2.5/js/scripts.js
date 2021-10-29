"use strict";

console.warn("[1] Отсортировать массив чисел по возрастанию [3, 90, 5, -100, 50, 0, 560, 1]. Использовать метод массивов sort");
let numsArr = [3, 90, 5, -100, 50, 0, 560, 1];
numsArr.sort((a, b) => a - b);
console.log(numsArr);