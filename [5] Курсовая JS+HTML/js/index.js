'use strict';

let mainForm = document.forms.mainForm;
let submitBtn = mainForm.submit;
let formMessage = document.getElementsByTagName("span")[0];


let taskName = mainForm["task-name"];
let taskDescription = mainForm["task-description"];
let taskDate = mainForm["task-term"];
let taskPrioritet = mainForm["task-prioritet"];
let taskSpecial = mainForm["task-special"];

function nameValid() {
    if (this.validity.valueMissing || this.validity.tooShort || this.validity.tooLong) {
        this.nextElementSibling.classList.add("fade-out");
        this.nextElementSibling.innerText = `Значение должно быть в диапазоне от ${this.minLength} до ${this.maxLength} символов.`;
        return false
    }
    this.nextElementSibling.classList.remove("fade-out");
    return true
}


function isDateValid(elem) {
    let currentDate = new Date();
    let inputDate = new Date(elem.value);
    if (currentDate >= inputDate) {
        elem.nextElementSibling.classList.add("fade-out");
        elem.nextElementSibling.innerText = `Дата не может быть в прошлом!`;
        return false;
    } else {
        elem.nextElementSibling.classList.remove("fade-out");
        return true;
    }
}

taskName.addEventListener('input', nameValid);



let taskId = 0;
function submitFunc(event) {
    event.preventDefault();

    
let localStorageTasks = localStorage.getItem('tasks');

if (localStorageTasks !== null) {
    let jsonLocalStorage = JSON.parse(localStorageTasks);
    taskId = ++jsonLocalStorage.length;
}


    let newTask = [{
        title: taskName.value,
        description: taskDescription.value,
        date: taskDate.value,
        prioritet: taskPrioritet.value,
        special: taskSpecial.value,
        id: taskId
    }, ];




    if (taskName.validity.valid && taskDescription.validity.valid && isDateValid(taskDate)) {
        if (localStorageTasks !== null) {
            let jsonLocalStorage = JSON.parse(localStorageTasks);
            jsonLocalStorage.push.apply(jsonLocalStorage, newTask);
            localStorage.setItem("tasks", JSON.stringify(jsonLocalStorage));
        } else {
            localStorage.setItem("tasks", JSON.stringify(newTask));
        }


        let element = document.getElementsByClassName('notify')[0];
        element.classList.add("fade-out");
        element.innerText = `Задача "${taskName.value}" была успешно добавлена!`;

        function fadeIn(element) {
            element.classList.remove("fade-out");
        }
        setTimeout(fadeIn, 3000, element);
        mainForm.reset();

    }


}

const tasklist = document.getElementById('tasklist');

tasklist.addEventListener('click', () => {
    window.open("tasks.html", '_self');
});
submitBtn.addEventListener('click', submitFunc);