"use strict";

let animals = [
    {
       "name": "Люся",
       "age": "1 год",
       "color": "трехцветная",
       "additional_info": {"vaccinations": true, "passport": true}
    },
    {
       "name": "Том",
       "age": "3 месяца",
       "color": "белый",
       "additional_info": {"vaccinations": false, "passport": false}
    },
    {
       "name": "Макс",
       "age": 2,
       "color": "серый",
       "additional_info": {"vaccinations": false, "passport": true}
    },
    {
       "name": "Василий",
       "age": 3,
       "color": "черный",
       "additional_info": {"vaccinations": true, "passport": true}
    }
 ];     
 
let titles = 
    {
       "name": "Имя",
       "age": "Возраст",
       "color": "Окрас",
       "additional_info": "Дополнительно"
    };   

    let animalsDiv = document.querySelector('.animals');

    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    
    let theadRow = thead.insertRow();
    Object.keys(animals[0]).forEach((title)=>
    {
        let cell = theadRow.insertCell();
        cell.innerText = titles[title].toUpperCase();
    });

    Object.values(animals).forEach((obj)=>
    {
        let dataRow = tbody.insertRow();
        Object.values(obj).forEach((param)=>
        {
            let cell = dataRow.insertCell();
            
            if(typeof(param) === "object")
            {
                let vaccinations = (param.vaccinations) ? "Есть" : "Нет";
                let passport = (param.passport) ? "Есть" : "Нет";
                cell.innerHTML = `
                    <p>Прививки: ${vaccinations}</p>
                    <p>Паспорт: ${passport}</p>
                    `;
            }
            else
            {
                cell.innerText = param;
            }
        });
    });

    table.append(thead, tbody);
    animalsDiv.append(table);