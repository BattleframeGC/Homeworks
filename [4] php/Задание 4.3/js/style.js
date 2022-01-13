"use strict";

function modalsInit()
{
    var modalButtons = document.querySelectorAll('.js-open-modal'),
        overlay      = document.querySelector('.js-overlay-modal'),
        closeButtons = document.querySelectorAll('.js-modal-close');
 
        modalButtons.forEach(function(item){
 
       item.addEventListener('click', function(e) {
 
          e.preventDefault();
          var modalId = this.getAttribute('data-modal'),
          modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
          modalElem.classList.add('active');
          overlay.classList.add('active');
       }); 
 
    });
 
    closeButtons.forEach(function(item){
 
       item.addEventListener('click', function(e) {
          var parentModal = this.closest('.modal');
 
          parentModal.classList.remove('active');
          overlay.classList.remove('active');
       });
 
    });
 
     overlay.addEventListener('click', function() {
         document.querySelector('.modal.active').classList.remove('active');
         this.classList.remove('active');
     });
}

function openInfo(item)
{
    console.log(item);
    let modalTitle = document.querySelector(".modal__title");
    let modalInfo = document.querySelector(".modal__info");
    modalTitle.innerHTML = `<h2>${item.title}</h2>`;
        modalInfo.innerHTML = `
        <p>Стоимость: ${item.price} р.</p>
        <img src='/data/images/${item.image}'>
        <p>${item.description}</p>
        `;
}

function addItems(itemsArr)
{
    let element = document.querySelector(".items");

                Object.values(itemsArr).forEach((item)=>
                {
                    let aticle = document.createElement("aticle");
                    aticle.innerHTML = `
                        <h2>${item.title}</h2>
                        <img src='/data/images/${item.image}'>
                        <p>Стоимость: ${item.price} р.</p>
                        `;
                    aticle.classList.add("col-3");
                    aticle.classList.add("post");
                    
                    let button = document.createElement("a");

                    
                    if(item.count > 0){
                        button.innerHTML = `Подробнее`;
                        button.dataset.id = item.id;
                        button.classList.add("js-open-modal");
                        button.dataset.modal = "info";
                        button.addEventListener("click", () => openInfo(item));

                    }else{
                        button.innerHTML = `Товар закончился`;
                        button.disabled = 'true';
                    }

                    aticle.append(button);
                    element.append(aticle);
                });

}

fetch('data/index.php')
    .then(response => response.json())
    .then(item => {
            addItems(item);
            modalsInit()
    });

    

document.forms.auth.addEventListener('submit', function (event){
    event.preventDefault();
    let fd = new FormData(this);
   // if (!this.elements.login.value) fd.set('login', '0')
   // if (!this.elements.password.value) fd.set('password', '0')
    
    fetch('data/index.php', {
        method: 'post',
        body: fd
    })
        .then(response => response.text())
        .then(answer => {

            if(answer==1)
            {
                let overlay = document.querySelector('.js-overlay-modal');
                let authModal = document.getElementById("auth-modal");
                authModal.classList.remove('active');
                overlay.classList.remove('active');
            }
            else
            {
                let modalError = document.getElementById("error");
                modalError.innerHTML = `Неверное имя пользователя или пароль!`;
            }
            
            console.log(answer);
        });
})


