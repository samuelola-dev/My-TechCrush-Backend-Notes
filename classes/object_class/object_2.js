import space from "../module.js";


// More explanation on global scope variable

function student() {
    let studentName = "Ayomide";
}

student();

console.log(studentName);
// This is going to fail, because the variable is in another code block not it's parent code block



// But using var is still the same

if (true) {
    var studentName = "Ayomide"; 
}

console.log(studentName);
space()

// But this may work

let studentId = "Samuel Ola";

if (true) {
    studentId = "Alex";
}

console.log(studentId);

space()

// Back to Object

// To check if a key exists

let person = {name: "Alice", age: 25};

console.log("name" in person);  // This returns a boolean (true)
console.log("house" in person);  // This returns a boolean (false)

// Also with this

console.log(person.hasOwnProperty('name'));

space();

// Freeeze
// This means that nobody can change the object property

// Object.freeze(person);

// So if we try to change the age, t is not going to update

// person.age = 30;

// console.log(person);

// In objects we can also add functions

// Using the keyword function

let studentOne = {
    name: "John",
    age: 20,
    introduce: function() {
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old.`);
    }
};

studentOne.introduce();

// Using the arrow function

let studentTwo = {
    name: "Samuel",
    age: 18,
    introduce: () => {
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old.`);
    }
};

// studentTwo.introduce(); // This wil not run because arrow function doesn't respect scope


// Objects

let child = {name: "Alice", age: 20, car: 0}
const entries = Object.entries(child);

console.log(entries[0]);

// Entries is very useful in database

// assign allows us to extend the properties by adding a new key-pair values

const clone = Object.assign({address: "FRN"}, person);
console.log(clone)

space();

// In array, we use the spread operator to add arrays together

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combined = [...array1, ...array2]
console.log(combined);

// But if we did not put ... , it is going to put them in a separate array

const combined2 = [array1, array2];
console.log(combined2);

// Also if we only put a single ..., it puts the second in a separate array

const combined3 = [...array1, array2];
console.log(combined3);

space()

// We can also use it to copy an array
const copy = [...array1];
console.log(copy);

// These are useful tricks in database and makes our codebase better

space();

// In Object it is also the same idea

const objOne = {name: "Temitayo", country: "Nigeria"};
const objTwo = {name: "Samuel", country: "Wakanda"};

const combinedObject = {...objOne, ...objTwo};
console.log(combinedObject);    // We notice that the second object overries the seconde because of the same key: name, country

// But if the keys are different it will produce a new combined object

const ob1 = {name: "Samuel", country: "USA"};
const ob2 = {car: "Toyota", dish: "Garri"};

const combinedObject2 = {...ob1, ...ob2};
console.log(combinedObject2);

space();

// Also if we only add ... to one it will but the second in a separate object

const combinedObject3 = {...ob1, ob2};
console.log(combinedObject3);

space();


// And also if we didn't add ... at all it will but them in separate objects

const combinedObject4 = {ob1, ob2};
console.log(combinedObject4);

space();

// We can also use it to combined the object wih a new object

const combinedObject5 = {...ob1, ...{house: "Victoria Island"}};
console.log(combinedObject5);













