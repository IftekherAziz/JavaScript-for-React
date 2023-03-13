/* -------------------- Number 1 (Variable)---------------------------- */
// How to declare a variable using let and const:

// When a variable value can not be changed we will declare variable using const:
const myName = "Iftekher Aziz";

// When the variable value can be changed we will declare variale using let:
let season = 'winter';
season = 'summer';

/* -------------------- Number 2 (Condition)-------------------------- */

// 6 Basic conditions: > , < , >= , <= , !== , ===

// Multiple conditions: && , ||


/* -------------------- Number 3 (Array)-------------------------- */
// Declaration of array:
const numbers = [12, 34, 56, 78, 91];
const friends = ['Iftekher', 'Aziz', 'Rahman', 'Sakib',];

// Accessing array element: (index)
friends[0]; // Iftekher

// Find length of an array element: (length)
numbers.length; // 5

// Add an element in an array: (push)
numbers.push(100); // [12, 34, 56, 78, 91, 100]

// Remove an element from an array: (pop)
numbers.pop(); // [12, 34, 56, 78, 91]

// Find index of an element in an array: (indexOf)
numbers.indexOf(56); // 2

// Find an element in an array: (includes)
numbers.includes(56); // true

// Remove an element from an array using index: (splice)
numbers.splice(2, 1); // [12, 34, 78, 91]

// Copy an array: (slice)
const newNumbers = numbers.slice(); // [12, 34, 78, 91]

// Find an element in an array using loop: (for loop)
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(element);
}

// Find an element in an array using loop: (for of loop)
for (const number of numbers) {
    console.log(number);
}

// Find an element in an array using loop: (forEach loop)
numbers.forEach(function (number) {
    console.log(number);
})

// Find an element in an array using loop: (forEach loop with arrow function)
numbers.forEach(number => console.log(number));

// Find an element in an array using loop: (map)
const mapArray = numbers.map(number => number * 2); // [24, 68, 156, 182]

// Find an element in an array using loop: (filter)
const filterArray = numbers.filter(number => number > 50); // [56, 78, 91]

// Find an element in an array using loop: (reduce)
const reduceArray = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0); // 275

/* -------------------- Number 4 (Function)-------------------------- */

// Declaration of function:
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

// Calling a function:
const sum = addTwoNumbers(12, 34); // 46

// Declaration of function with default parameter:
function addTwoNumbers(num1, num2 = 10) {
    return num1 + num2;
}

// Calling a function with default parameter:
const newSum = addTwoNumbers(12); // 22

// Declaration of function with rest parameter:
function addNumbers(...numbers) {
    return numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);
}

// Calling a function with rest parameter:
const sumOfNumbers = addNumbers(12, 34, 56, 78, 91); // 271

// Declaration of function with arrow function:
const addTwoNumbers = (num1, num2) => num1 + num2;

// Calling a function with arrow function:
const sumTwoNumber = addTwoNumbers(12, 34); // 46

// Declaration of function with arrow function with default parameter:
const addTwoNumbers = (num1, num2 = 10) => num1 + num2;

// Calling a function with arrow function with default parameter:
const sumTwoNumberArrow = addTwoNumbers(12); // 22

// Declaration of function with arrow function with rest parameter:
const addNumbers = (...numbers) => numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);

// Calling a function with arrow function with rest parameter:
const sumOfNumbersArrow = addNumbers(12, 34, 56, 78, 91); // 271

/* -------------------- Number 5 (Object)-------------------------- */

// Declaration of object:
const person = {
    name: 'Iftekher Aziz',
    age: 25,
    address: 'Dhaka, Bangladesh',
    friends: ['Sakib', 'Rahman', 'Aziz', 'Iftekher'],
    isMarried: false,
    salary: 50000,
    getSalary: function () {
        return this.salary;
    }
}
// 3 ways to access objects property:

// 1.Accessing object property:
person.name; // Iftekher Aziz

// 2.Accessing object property using bracket notation:
person['name']; // Iftekher Aziz

// 3.Accessing object property using variable:
const personName = 'name';
person[personName]; // Iftekher Aziz



