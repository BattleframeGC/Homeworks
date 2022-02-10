"use strict";

document.forms.auth.addEventListener('submit', function auth(event) {
    event.preventDefault();
    fetch('do_login.php', {
        method: 'post',
        body: new FormData(this)
    })
        .then(response => response.text())
        .then(result => {

            if(result === "OK")
            {
                window.location.replace('/profile.php');
            }
            else if (result === "FAIL")
            {
                document.getElementById('info').innerText = 'Неверный логин, либо пароль!'
            }
            else
            {
                document.getElementById('info').innerText = 'Непредвиденная ошибка, попробуйте позже!'
            }
        })
})