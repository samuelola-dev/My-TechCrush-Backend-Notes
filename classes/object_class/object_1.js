import space from "../module.js";

// Object is a collection of key-paired values. It is like describing a thing with its properties

// To create an object, there are 3 ways to create an object

let car = {color: "red", make: "Toyota", model: "Corolla"};
console.log(car);
space()

// accessing the value of the color property using index which is a string
console.log(car['color']);

// Using . method
console.log(car.color);

space();

// Note we can't do this when we using variable
let key = 'color';
console.log(car.key)        // undefined


// Because car.key doesn't exist

// We can only do it like this
console.log(car[key])
space();

// Another way of creating Object

function Person(name, age){
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log(`Hello, my name is ${name}, I am ${age} years old.`)
    }
}

const john = new Person("John", 38);
console.log(john);
john.greet()

// this is a relative to the class Person
// this is used to reference something

// this is the property of the object: e.g person's name, person's age, person's greet

space();

// This makes our object dynamic
console.log(john.age);

space();

// Another way to create an object

const personProto = {
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const jane = Object.create(personProto)
jane.name = "Jane";
jane.age = 28;
jane.color = 'green';

// Even we can even assign a property name and value outside the object
// We add a new key

console.log(jane);

space();

// Array inside an object
// We acesss the array elements via the keys

const samuel = {
    name: "Samuel",
    age: 50,
    marital_status: "single",
    is_tall: false,
    hasMoney: null,
    cars: ["BMW", "Audi", "Toyota", [1, 2, 3], {garage: "vice_city", parking: [1, 2, 3]}],
    address: {
        house_number: 1,
        country: "FRN",
        state: "unknown"
    }
}

// We can have this form of jagons as a form of data from database
console.log(samuel);

// We can even add a new key outside the object

samuel.favoriteFood = "garri";

// We can update a key value

samuel.marital_status = "heartbroken";

space()

// How to make an array of all the keys and values

const samuelKeys = Object.keys(samuel)
const samuelValues = Object.values(samuel)

console.log("Keys: - ")
console.log(samuelKeys)

space();

console.log("Value: - ");
console.log(samuelValues);


