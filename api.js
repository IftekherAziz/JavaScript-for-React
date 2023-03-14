/* ------------JSON-------------- */

const student = {
    name: "Sakib Khan",
    age: 32,
    movies: ["king kong", "king kong 2"]
};
// console.log(student);

// Create JSON from object:
const studentJSON = JSON.stringify(student);
console.log(studentJSON);
// output: {"name":"Sakib Khan","age":32,"movies":["king kong","king kong 2"]}

// Create object from JSON:
const studentObj = JSON.parse(studentJSON);
console.log(studentObj);
// output: { name: 'Sakib Khan', age: 32, movies: [ 'king kong', 'king kong 2' ] }


/* --------------Fetch----------------- */
// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data))

// Get object keys, values:
const student1 = {
    name: "Sakib Khan",
    age: 32,
    movies: ["king kong", "king kong 2"]
};
const keys = Object.keys(student1);
const values = Object.values(student1);

/* --------------For each loop----------------- */
// forEach loop is used to iterate an array.
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
num.forEach(n => console.log(n));

/* --------------Map----------------- */
// Map is used to create a new array from an existing array.
const numbers = [3, 4, 5, 6, 7, 8];
const output = numbers.map(x => x * x);

/* --------------For of----------------- */
// For of loop is used to iterate an array or array like object.
const arr = ["apple", "banana", "orange"];

for (const fruit of arr) {
    console.log(fruit);
}

/* ---------------For in ----------------- */
// For in loop is used to iterate an object.
const obj = { name: "John", age: 30, city: "New York" };

for (const prop in obj) {
    console.log(`${prop}: ${obj[prop]}`);
}

/* ---------------Add or Remove an array--------------------- */

const products = [
    { name: 'water bottle', price: 50, brand: 'pran', color: 'yellow' },
    { name: 'mobile phone', price: 15000, brand: 'apple', color: 'black' },
    { name: 'smart watch', price: 3000, brand: 'apple', color: 'black' },
    { name: 'sticky note', price: 30, brand: 'nike', color: 'white' },
    { name: 'water glass', price: 3, brand: 'pran', color: 'white' },
];

const newProducts = { name: 'webcam', price: 700, brand: 'logitech', color: 'black' };

// copy products array and add newProducts
const newAdded = [...products, newProducts];
console.log(newAdded);

// copy products array and remove one item
const remaining = products.filter(pd => pd.name !== 'water bottle' && pd.name !== 'sticky note');
console.log(remaining);