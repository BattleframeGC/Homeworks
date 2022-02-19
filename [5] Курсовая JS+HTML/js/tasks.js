"use strict";

function drawTasks(tasksArr, element) {

    
    if (!tasksArr) {
    element.innerHTML = `<span>ЗАДАЧИ ОТСУТСТВУЮТ</span>
    <div class="task_buttons">
        <a href="add_task.html">Добавить задачу</a>
        <a href="index.html">На главную</a>
    </div>`;
    return;
    }


    Object.values(tasksArr).forEach((task) => {

        var date = new Date(task.date);

        let hours = date.getHours();
        hours = (hours < 10) ? '0' + hours : hours;

        let minutes = date.getMinutes();
        minutes = (minutes < 10) ? '0' + minutes : minutes;

        let priority = "Обычный";
        
        let special = (task.special) ? task.special : "Нет";

        if (task.prioritet == 2) priority = "Важно";

 
        var dateFormated = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} (${hours}:${minutes})`;

        let card = document.createElement("div");
        card.classList.add("task");
        card.setAttribute("id", task.id);
        card.innerHTML = `
                    <u><h2>${task.title}</h2></u>
                    <p>${task.description}</p>
                    <p><b>Срок:</b> ${dateFormated}</p>
                    <p><b>Приоритет:</b> ${priority}</p>
                    <p><b>Особые пожелания:</b> ${special}</p>`;

        card.addEventListener("click", function selectToggle() {
            this.classList.toggle("selected");
        });

        element.append(card);
    });
}

function drawRemoveButton(tasks, element) {
    if (!tasks)  return;
    let button = document.createElement("button");
    button.innerText = "Удалить выбранные";
    button.setAttribute("id", "unlbutton");
    button.classList.add("unlbutton");
    button.addEventListener("click", function toUnlink() {
        let elems = document.querySelectorAll(".selected");
        if (elems.length) {
            let unlinkTasks = [];
            elems.forEach((elem) => {
                unlinkTasks.push(Number(elem.getAttribute("id")));
                elem.remove();
            });
            removeFromStorage(tasks, unlinkTasks);
        }
    })
    element.append(button);
}

function removeFromStorage(tasksFromStorage, id) {

    let tasks = tasksFromStorage.filter((task) => {
        return !id.includes(task.id)
    });

    if (!tasks.length) {
        localStorage.clear()
        document.getElementById("unlbutton").remove();
        document.querySelector(".tasks_main").innerHTML = `<span>ЗАДАЧИ ОТСУТСТВУЮТ</span>
        <div class="task_buttons">
            <a href="add_task.html">Добавить задачу</a>
            <a href="index.html">На главную</a>
        </div>`;
    } else {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}




let tasks = JSON.parse(localStorage.getItem("tasks"));
let tasksSection = document.querySelector(".tasks_main");
let tasksContainer = document.querySelector(".container");

drawTasks(tasks, tasksSection);
drawRemoveButton(tasks, tasksContainer);