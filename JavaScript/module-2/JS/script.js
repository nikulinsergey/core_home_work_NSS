'use strict';

let counter = 0;
const numbers = [];
let userInput;
let total = 0;
do {
    userInput = prompt('Введите число');
    let userInputNumber = Number(userInput);
    if(!Number.isNaN(userInputNumber)){
        if(userInputNumber > 0) {
            numbers.push(userInputNumber); 
        }
    }else {
        alert('Было введено не число, попробуйте еще раз');
        continue;
    }
    
} while(userInput !== null || userInput > 0);

for (const key of numbers){
    console.log(total += key);
}
if(numbers.length > 0){
    alert(total);
}
