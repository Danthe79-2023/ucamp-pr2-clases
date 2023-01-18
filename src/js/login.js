import User from './models/User.js'

const  from = document.querySelector();

document.addEventListener("DOMContentLoaded", ()=>{

    if(from.attachEvent){
        from.attachEvent("submit", login);
    }else {
        from.addEventListener("submit", login);
    }
});

function login(e){
    e.preventDefault();

    const name = document.querySelector().value;
    const password = document.querySelector().value;

    if (name === '' || password === ''){
        alert('Todos los campos son obligatorios');
        return;
    }else {
        const user = new User();
        const userLogged = user.login(name, password);
        if (usserLogged){
            window.location.href = '/index.html'
        }else {
            alert('Usario o contraseña incorrectos')
        }
    }
}