import space from "../module.js";

// Higher order functions
// These are functions that take in other functions within their variables or as variables within there space


function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}


function calculator(a, b, operation) {
    return operation(a, b);    
}

let runCalculator = calculator(10, 5, add);
let runCalculator2 = calculator(3, 2, multiply);

console.log("Addition:", runCalculator);
space();
console.log("Multiplication:", runCalculator2);

// calculator function is the higher order function that is going to take the other functions assists variable
// So we can take in function inside another function

// Examples say a function for PAYPAL, REMITA, OPAY for transactions

// So we can also use function expression as high order functions as long as we are taking hoisting properly

space();

// Functions that returns a function

function createGreeter(timeOfTheDay, greeting){
    if (timeOfTheDay === "morning") {
        greeting = "Good Morning";
    } else if (timeOfTheDay === "afternoon"){
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    return function(name){
        return `${greeting}, ${name}!`;
    }
}

const sayHello = createGreeter("morning", "Hello");

console.log(sayHello);  // returns the function as the returned value

console.log(sayHello("John"));  // returns Hello John
// Here we are calling the inner function


// We use this example when we want to create a template function
// Note when we are calling the inner function  we don't need to call the parent functions

space();

// Closures

// Anyonymous function is a function that doesn't have a name
// IIFE - Immediately Inoveked Function Expression

// Example of IIFE
() => {console.log("IIFE")};

// Closure is return function as though it is an objects


let count = 0;

function counter() {
    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
        getCount() {
            return count;
        }
    }
}

// Note the return value of this function is an object of functions {a(){}, b(){}, c(){}}


// The fun fact about this closure is that they update themselves
// like if count was increased by 1, it saves it and this can still be further updated by decrement

const myCounter = counter();

// Exampe // 0 + 1 + 1 - 1  
console.log(myCounter.increment()); // 1
console.log(myCounter.increment()); // 2
console.log(myCounter.decrement()); // 1
console.log(myCounter.getCount());  // 1

space();

console.log(myCounter);         // Returns an object of all the inner functions




