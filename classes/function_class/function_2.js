import space from "../module.js";

// Function is a block of code designed to perform a particular task.

function backendTopic(){
    console.log('Introduction to Functions');
}

// If he say you should write a code snippet do not put console.log inside the function or classes.
// console.log should be when we practice on our one so we remove the console.logs and send it to him.

// A function that doesn't return anything or no return defined is an undefined function

let topic = backendTopic();
console.log('Today \'s topic is: ', topic);         // returns undefined

space();

// Instead we should do this

function backendTopics() {
    return "Introduction to Functions";
}

let topics = backendTopics();
console.log('Today \'s topic is:', topics);

// Note the backslash '\' allows us to save a single quote ' if two single quote as been used before making three inorder to avoide error

// We can return different values: like numbers, boolean, strings
// To return multiple values, we use arrays, 

function getUserData(){
    return {name: "Samuel Ola", car: "Toyota"};
}

let samuel = getUserData();
console.log(samuel)

space();

// With arguments and parameter functions makes things dynamic and easier

function classAttendance(attendance, track = "AI") {
    if (attendance >= 10) {
        return "Sucess " + track;
    } else {
        return "Failed " + track;
    }
}

// attendance, track are the parameter 

let first = classAttendance(9, "Machine Learning");
console.log(first);
let second = classAttendance(1, "Fine Arts");
console.log(second);

// track has a defualt value = "AI" incase the argument was not supplied
// Always put optional argument at the back

// Variables are assigned based on position
// Position matters when supplying arguments

let third = classAttendance("Frontend", 13, true);
console.log(third);

// true is an optional argument but placed at the back

space();

// We can also perfrom operations

function multiply(a, b) {
    return a * b;
}

let result = multiply(3, 4); // 3 * 4 = 12
console.log("Result: " + result);

space();

function greet(names = []){
     names.forEach(name => {
        console.log("Hello " + name);
    });;
}

console.log(greet(["Alice", "Bob", "Charlie"]));

// Arrow functions are called function expressions

// undefined is intentional that is you are not ready to add data yet.
// null means that subsquently along the way your variable will later be update.

// They the same but not exactly the same thing

// JavaScript is Object Orientated that it males use of class, so it's like it is cass oriented

// Let's just say a function like the greet() function requires an array as input, typescript we make sure of that






