/* ---------------Truthy------------------ */
// Truthy values: true, 1,'string', " ", "0", [], {}

// Check if truthy:
let myVar = 5;
if (myVar) {
    myVar = myVar * 10;
} else {
    myVar = 0;
}

const isActive = true;
const showUser = () => console.log('Display User');
const hideUser = () => console.log('Hide User');
isActive ? showUser() : hideUser();

// toggle boolean:
let isOn = false;
isOn = !isOn;
console.log(isOn);

/* ---------------Falsy------------------ */
// Falsy values: false, 0, "", null, undefined, NaN

// Check if falsy:
let myMoney = 100;
if (!myMoney) {
    myMoney = myMoney + 10;
}
else {
    myMoney = 0;
}

const money = 80;
let food;
if (money >100 ) {
    food = 'biriyani';
}
else {
    food = 'alur vorta';
}

/* ------Ternary operator: condition ? true value : false value------- */

// To make truthy or falsy in shortcut
let food1 = money > 100 ? 'biriyani' : 'alur vorta';
console.log(food1);

let drink = (myMoney > 100 && myVar > 10) ? 'coke' : 'filter water';
console.log(drink);

/* ---------------Number to String ------------------ */
const num1 = 52;
console.log(num1);

const numStr = num1 + '';
console.log(numStr);

/* ---------------String to Number------------------ */
const input = '560';

// const inputNumber = parseInt(input);
// console.log(inputNumber);

const inputNum = +input;
console.log(inputNum);