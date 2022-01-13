"use strict";
document.addEventListener('DOMContentLoaded', function() {
    let modalButtons = document.querySelectorAll('.js-open-modal'),
        overlay      = document.querySelector('.js-overlay-modal'),
        closeButtons = document.querySelectorAll('.js-modal-close');
 
        modalButtons.forEach(function(item){
 
       item.addEventListener('click', function(e) { 
          e.preventDefault();
		  
          let cakeId = this.getAttribute('data-id');
		   
			fetch(`get.php?id=${cakeId}`)
			.then(response => response.json())
			.then(item => openInfo(item));
		
		
          let modalId = this.getAttribute('data-modal'),
          modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
          modalElem.classList.add('active');
          overlay.classList.add('active');
       }); 
 
    });
 
    closeButtons.forEach(function(item){
 
       item.addEventListener('click', function(e) {
          let parentModal = this.closest('.modal');
 
          parentModal.classList.remove('active');
          overlay.classList.remove('active');
       });
 
    });
 
     overlay.addEventListener('click', function() {
         document.querySelector('.modal.active').classList.remove('active');
         this.classList.remove('active');
     });
});

function openInfo(item)
{
    let modalTitle = document.querySelector(".modal__title");
    let modalInfo = document.querySelector(".modal__info");
    modalTitle.innerHTML = `<h2>${item.name}</h2>`;
        modalInfo.innerHTML = `
        <p>Стоимость: ${item.price} ${item.currency}.</p>
        <img src='/images/${item.main_img}'>
        <p>${item.description}</p>
        `;
}