import {getItemLocalStorage} from './utils/localstorage.js';
import Task from './models/Task.js';
import User from  './models/User.js';

const logout = document.querySelector();
const container = document.querySelector();
const selectUsers = document.querySelector();
const selectUsersUpdate = document.querySelector();
const createTaskAction = document.querySelector();
const updateTaskAction = document.querySelector();

document.addEventListener('DOMContentLoaded', () =>{

    const user = getUser();

    if (!user) {
        window.location.href = '/login.html'
    } else {
        document.querySelector().innerHTML = user.name;
    }

    logout.addEventListener('click', logoutAction);

    getTask();

    const users = new User().getAll();

    if (users.length > 0){
        users.forEach(user => {
            selectUsers.innerHTML += `

            <option value="${user.name}">${user.name}</option>
            `;
            selectUsersUpdate.innerHTML += `
             <option value="${user.name}">${user.name}</option>
            `
        })
    }
})

