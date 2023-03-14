const person = {
    name: 'John',
    age: 30,
    profession: 'developer',
    address: 'New York',
}

// Do Notation:
const name = person.name;
console.log(name);

// Bracket Notation:
const age = person['age'];
console.log(age);

// Dynamic Notation:
const prof = 'profession';
const profession = person[prof];
console.log(profession);