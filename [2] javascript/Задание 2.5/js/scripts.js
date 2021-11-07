"use strict";

console.warn("[1] Отсортировать массив чисел по возрастанию [3, 90, 5, -100, 50, 0, 560, 1]. Использовать метод массивов sort");
let numsArr = [3, 90, 5, -100, 50, 0, 560, 1];
numsArr.sort((a, b) => a - b);
console.log(numsArr);


console.warn("[2] Написать функцию проверки на спам");
let antiSpam = (text, ...badWords) => 
{
    let words = text.toLowerCase().split(" ");
    let clear = 0;
        for (let word of words) 
        {
            if (!badWords.includes(word.toLowerCase())) continue;
            clear++;
        }
    let percent = Math.ceil(clear / words.length * 5);
    return percent;
}
let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
let aSpam = antiSpam(text, "lorem", "ipsum", "ipsum") 
console.log("Заспамленность текста: " + aSpam);


console.warn("[3] На методы массивов из занятия #5.");
let numsArr2 = [
    [3, 5, -1, 6, 0],
    [56, -9, 111, 6],
    [11, 86, -12], 
];
let array = numsArr2.map(arr => 
{
    let arrAdd10 = arr.map(item => item + 10);
    let isPos = arr => arr > 0;
    let newArray = arrAdd10.filter(isPos);
    return newArray
});
console.log(array);