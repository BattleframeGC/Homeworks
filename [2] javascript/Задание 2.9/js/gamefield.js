'use strict';

let prises = {
    headphones: "Наушники",
    book: "Книга",
    postcard: "Открытка"
 };
 
function generateField(n)
{
    var gamefield = document.getElementById('gamefield');
    
    if (n < 3) 
    {
        var row = document.createElement('p');
        row.innerHTML = 'Требуется значение от 3 и более!';
        gamefield.append(row);
        return;
    }

    let hasPrise = [];
    let id = 0;
    
    for (let k = 0; k < 3;) 
    {
        let rndCell = Math.floor(Math.random() * n * n);
        if (hasPrise.includes(rndCell)) continue;
        hasPrise.push(rndCell);
        k++
    }
    
    for (var i = 0; i < n; i++) 
    {
        var row = document.createElement('div');
        row.className = "row";
        gamefield.append(row);

        for (var j = 0; j < n; j++) 
        {
            var cell = document.createElement('div');
            cell.className = hasPrise.includes(id) ? "prise-cell" : "cell";
            cell.innerHTML = id+1;

            if (hasPrise.includes(id))
            {
                let p = Math.floor(Math.random() * 3);
                let prisesArr = Object.keys(prises);
                cell.innerHTML = prisesArr[p];
                cell.setAttribute("prise", prisesArr[p]);
            } 

            id++;
            row.append(cell);
        };
    };
};

let num = parseInt(prompt("Укажите количество клеток в одной стороне поля (3 и более)"));
if(!num) num = 4;
generateField(num);