'use strict';


// 1111111111111111111111111111111111111111111111111111111


/*  
  Напиши скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - заменяет значение premium на false
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true
// };

// user.mood = 'happy';
// user.hobby = 'java';
// user.premium = false;
// const k = Object.keys(user);
// console.log(k);
// for(let key of k){
//   console.log(key);
// }

// const r = Object.entries(user);
// console.log(r);
// for(let rec of r){
//   console.log(rec);
// }
// console.log(user.mood);
// console.log(user.hobby);

// // console.log(user);


// 222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222


/*
  Напиши скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99
// };

// const keys = Object.keys(tasksCompleted);
// let max = tasksCompleted[keys[0]];
// let maxKey = keys[0];

// for (let key of keys){
//   if(tasksCompleted[key] > max){
//     max = tasksCompleted[key];
//     maxKey = key;
//   }
// }
  
// console.log(`${maxKey}: ${max}`);


// 333333333333333333333333333333333333333


/*  
  Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

// // Вызовы функции для проверки
function countProps(obj){
  obj = Object.values(obj);
  console.log(countProps);
};

for(const key in countProps){
  console.log('Key: ', key);
  
}


console.log(
  countProps({})
); // 0

console.log(
  countProps({a: 1, b: 3, c: 'hello'})
); // 3