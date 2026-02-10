// For example our wall clock is a loop, it has a starting point and goes round the clock
// Loop it's a cycle
// Each cycle is called an iteration

// Like from 12 am to 12 pm and 12pm to 12 am so like in a day we have 2 iteration

// There are different types of loops, for-loop, do-while loop, while-loop, for-in, for-of


// FOR LOOPS
// for (let i = 0; i < 5; i++) {
//     console.log("Iteration Number", i);
// }

// things to take note: for keyword, starting point and end point, condition and then the increment i.e i++
// the starting point is always a let variable neacuse the iteration can latter chang,, so we can't change constant
// Note that it's only for loop is a case where we usually use ; within parentheses compared to function where we use comma ,

// We can also have decrement 

for (let i = 7; i >= 0; i--) {
    console.log("Iteration Number", i)
}


// Cool Samuel
for (let i = 0; Number(i <= 10); String(i = i + 2)) {
    console.log("Iteration", i);
}

// Saves as string then converts it to number and stuff

for (let i = 5; i <= 50; i += 5) {
    console.log("Numbers", i);
}

// WHILE LOOP
// similar to for but different to for loop,
// For while loop the starting point is declared as a separate variable outside the loop

let startingPoint = 2;

// while (startingPoint < 5) {
//     console.log("Whatsup");
// }

// Note this code will run to infinity

// The advantage of while loop is that it allows more condition to be easy placed than for loop

while (startingPoint < 5 && startingPoint > 1) {
    console.log("Current number", startingPoint);
    startingPoint++;
}

for (let i = 2; i > 1 && i < 5; i++) {
    console.log(i);
}

let start = 0
while (start < 5) {
    start++;
    console.log("Number -", start);
}


// Note this "let me tell u something"

let starting = 0;
while (starting < 5) {
    console.log("Our Number", starting++);
}
// Note it's is not advisablenand not of pratice
// Never put increment in a function

// Also the order at which the increment is also matters

// DO...WHILE LOOP

// Similar to while loop

let intialPoint = 0

// We use a do - statement, then a while statement
do {
    intialPoint++;
    console.log("Selecting Number -", intialPoint)
} while (intialPoint < 5) 

// Do while will run if the condition is met or not 

// Normal while loop will always chek condition before running
// It runs before checking condition i.e at first loop

let intial = 5;
do {
    console.log("Taking number - ", intial);
    // will run
} while (intial > 5)


// Compared to this

while (intial > 5) {
    console.log("Taking numberzzz - ", intial);
    // will not run
}

// FOR OF LOOP

let goodStudent = ["Samuel", "Temitope", "Eben", "Joshua", "Ndukka", "Micheal"];

// This is an array, think of array like a basket of items
// So now we want too iterate over the arrayS items

for (student of goodStudent) {
    console.log(`${student} is a good student.`);
}

console.log()
// we have an iteration for an item

for (student of goodStudent) {
    if (student !== "Joshua") {
        console.log(`${student} is an awesome student.`);

        // Joshua has been excluded
    }
}
console.log()

// For loop for arrays

// In an array there is something called index starting from zero
console.log(goodStudent)

for (let studentMatric = 0; studentMatric < goodStudent.length; studentMatric++) {
    console.log(`${goodStudent[studentMatric]} is very good`);
}
console.log()


// FOR ...IN LOOP is used for objects with key pair 

const anObject = {
    name: "John",
    age: 40,
    track: "Backend"
}

// We use the keys to get them

for (let key in anObject) {
    console.log(key);
}
console.log();

// Aceesing the key paird values
for (let key in anObject) {
    console.log("The " + key + " is " + anObject[key]);
}
console.log();

// Note using object.key will return undefined

for (let key in anObject) {
    console.log("The " + key + " is " + anObject.key);
}

console.log(anObject["name"])










