/* --------------- Number 1(Template String) ----------------- */

const number = [12, 34, 56, 78, 91];
const student = {
    name: 'Rahim',
    age: 23,
    movies: ['king kong', 'king kong 2']
};

// Declare template string and access value from object and array:
const about = `My name is ${student.name}. 
               I am ${student.age} years old. 
               I have seen ${student.movies.length} movies. 
               My favorite movies are ${student.movies[0]} and ${student.movies[1]}.
               My lucky number is ${number[2]}`;

// console.log(about);

/* --------------- Number 2(Arrow Function) ----------------- */

// Declare arrow function:
const getFiftyFive = () => 55;

// Declare arrow function with single parameter:
const addSixtyFive = num => num + 65;

// Declare arrow function with multiple parameter:
const isEven = (x, y) => x % 2 == 0 && y % 2 == 0;

// Declare arrow function with multiple line:
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
};
let res = doMath(7, 5);
// console.log(res);

/* --------------- Number 3(Spread operator) ----------------- */

// Declare spread operator: Create a new array from old array and add a new number to it..
const newNumber = [...number, 100];
// console.log(newNumber);

// Declare spread operator with array max:
const takaPoisa = [650, 450, 250];
const maximum = Math.max(...takaPoisa);
// console.log("Maximum Value is: ",maximum);

// Declare spread operator with array min:
const money = [650, 450, 250];
const minimum = Math.min(...money);
// console.log("Minimum Value is: ",minimum);

/* --------------- Number 4(Array Methods) ----------------- */

// Declare array methods: Filter
const num = [14, 30, 55, 79, 95];
// console.log("Before filter: ", num);
const bigger = number.filter(num => num > 50);
// console.log("After filter: ", bigger);

// Declare array methods: Find
const findNum = [44, 39, 59, 89, 90];
// console.log("Before find: ", findNum);
const find = findNum.find(num => num > 50);
// console.log("After find: ", find);

// Declare array methods: FindIndex
const findIndexNum = [40, 35, 58, 89, 90];
// console.log("Before findIndex: ", findIndexNum);
const findIndex = findIndexNum.findIndex(num => num > 50);
// console.log("After findIndex: ", findIndex);


/* --------------- Number 5(Array Methods) ----------------- */

const products = [
    { name: 'water bottle', price: 50, brand: 'pran', color: 'yellow' },
    { name: 'mobile phone', price: 15000, brand: 'apple', color: 'black' },
    { name: 'smart watch', price: 3000, brand: 'apple', color: 'black' },
    { name: 'sticky note', price: 30, brand: 'nike', color: 'white' },
    { name: 'water glass', price: 3, brand: 'pran', color: 'white' },
];

// Array mapping:
// Find all products brands name using the map function and store in a new array called brands:
const brands = products.map(product => product.brand);
// console.log(brands);
// Find all products price  using the map function and store in a new array called prices:
const prices = products.map(product => product.price);
// console.log(prices);

// Array filter:
// Find all products price  using the filter function and store in a new array called expensive:
const expensive = products.filter(product => product.price > 100);
// console.log(expensive);

// Array find:
// Find product using the find function and store in a new array called whiteColor:
const whiteColor = products.find(product => product.color == 'white');
// console.log(whiteColor);

// Array forEach: (It doesn't return anything)
// Find all products using the forEach function and store in a new array called forEach:
// products.forEach(product => console.log(product));
products.forEach(product => {
    // console.log(product.color);
    // console.log(product.price);
});

/* --------------- Number 6(Array & Object Destructuring) ----------------- */
// Array Destructuring:
const numbers = [42, 65];

// const x = numbers[0];
// const y = numbers[1];

const [x, y] = [42, 65];
// console.log(x, y);

// Destructuring array from function:
function boxify(num1, num2){
    const nums = [num1, num2];
    return nums;
}
const [first,second] = boxify(99, 88);
// console.log(first,second);


const newStudnet = {
    name: 'Aziz',
    age: 27,
    movies: ['king kong', 'king kong 2']
};
const [firstMovie, secondMovie] = newStudnet.movies;
// console.log(firstMovie, secondMovie);


// Object Destructuring:
const {name, age} = {id: 12, name: 'Aziz',salary: 30000, age: 27};
// console.log(name, age);

const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 60,
        address: 'Dhaka',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        },
    },
}

const {machine, ide} = employee;
// console.log(machine, ide);

const {weight, address} = employee.specification;
// console.log(weight, address);

const {brand} = employee.specification.watch;
// console.log(brand);

// optional chaining:
const {salary} = employee?.specification?.watch;
// console.log(salary);

