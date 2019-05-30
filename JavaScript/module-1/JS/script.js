'use strict';

const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
let login = prompt('Ваш логин');
if(login === null){
    alert('Отменено пользователем!');
}else if(login === adminLogin){
    pass = prompt('Введите пароль');
}else if(login !== adminLogin){
    alert('Доступ запрещен, неверный логин!')
}
if(pass === null){
    alert('Отменено пользователем!');
}else if(pass === adminPassword){
    alert('Добро пожаловать!');
}else if(pass !== adminPassword){
    alert('Доступ запрещен, неверный пароль!');
}




 