//  This file serves as index.js

// import local module using cjs
const path = require("node:path");

// importing 3rd party module using cjs
const colors = require("colors");

// Note whever you are importing your module matters.

// node first checks if it has that module installed
// then it checks the file path

// node:path is to avoid conflict incase you end up naming your custom module path
// the worst you can do is to name your custom module node:path which is very funny :-)

// importing custom module using cjs
const greetings = require("./my_modules/greetings.js");


console.log("File name:" + __filename);

// using the local module 'path'
console.log("Extension name: " + path.extname(__filename));
console.log("Base name: " + path.basename(__filename));
console.log("Directory name: " + path.dirname(__filename));

console.log();

// using the 3rd party module
console.log(colors.green("Hello"));
console.log(colors.red.underline("I like cake and pies"));
console.log(colors.inverse('inverse the color'));
console.log(colors.trap("Run the trap"));

console.log();

// using the custom modules
console.log(colors.green(greetings.sayHello("David")));