"use strict";

function functionClick(event) {
    let target = event.target;
    let count = this.getAttribute('count');

    if (target.tagName != 'BUTTON') return;

    let className = target.className;
    let type = (className === "plus") ? target.previousElementSibling : target.nextElementSibling;
    let int = parseInt(type.innerText);

    if (int > 0 && className === "minus") type.innerText--;
    if (int < count && className === "plus") type.innerText++;
}


const countInfo = document.querySelectorAll('.card__count-info');
console.log('click');

for (let counter of countInfo) {
    counter.addEventListener('click', functionClick);
}