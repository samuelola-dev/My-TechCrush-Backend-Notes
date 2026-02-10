// Functions makes code easier especially in modular codes i.e separate codes

// There is somehing called Function declaration and Function expression, Arrow functions

// Hoisting: declaring something like a function or variable before using it

// example

// arr has been declared
const arr = ["SAM", "dave", "john"];

// before using it

for (let name of arr) {
    console.log(name);
}
console.log()

// Function declaration using function keyword, followed by name, (), follwed by the codeblock

function greetings() {
    console.log("WE ARE HERE");
}

// Note the console.log won't work because know it is modular

// Before we can use a function we call it
greetings()

console.log()

// Function expression using let or const
// It does not have a name

let studentName = function(){
    console.log("WE ARE EXPRESSING");
}
studentName();

// Note Function expression requires hoisting i.e it is declared before using it

// While function declaration can be hoist or not. can be used before calling
// It cn be called any where

displayText();

function displayText() {
    console.log("Hello, world!");
}

displayText();
console.log()

// Function expession has a shorrter form which is Arrow function

let displayMessage = () => {console.log("We are throwing arrows")};
let displayMessage1 = () => console.log("We are throwing arrows");


// Note: we can also use it without {} only when the code block is longer
displayMessage();
displayMessage1();

// We use function expression globally







