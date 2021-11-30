"use strict";

let articles = [
    {
        id: 1,
        title: "JS",
        text: "About JS",
        author: "Max"
    },
    {
        id: 2,
        title: "PHP",
        text: "About PHP",
        author: "Ivan"
    },
    {
        id: 3,
        title: "DataBase",
        text: "About DB",
        author: "Paul"
    },
    {
        id: 4,
        title: "HTML",
        text: "About HTML",
        author: "Paul"
    }
];

let goods = [
    {
        title: "Piano",
        price: 3000,
        count: 25
    },
    {
        title: "Guitar",
        price: 1200,
        count: 40
    },
    {
        title: "Drum",
        price: 2700,
        count: 12
    },
    {
        title: "Flute",
        price: 900,
        count: 50
    },
    {
        title: "Harp",
        price: 3400,
        count: 5
    }
];


function generateTable(objArr) 
{
    let generateTable = document.querySelector(".generate-table");
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    
    let theadRow = thead.insertRow();
    Object.keys(objArr[0]).forEach((title)=>
    {
        let cell = theadRow.insertCell();
        cell.innerText = title.toUpperCase();
    });

    Object.values(objArr).forEach((obj)=>
    {
        let dataRow = tbody.insertRow();
        Object.values(obj).forEach((param)=>
        {
            let cell = dataRow.insertCell();
            cell.innerText = param;
        });
    });

    table.append(thead, tbody);
    generateTable.append(table);
}

generateTable(articles);
generateTable(goods);
