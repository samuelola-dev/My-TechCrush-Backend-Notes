// Importing a local (built-in) module

const path = require('path');

// Importing a third party module
const colors = require('colors');

// Importing a custome module
const greeting = require('./my_modules/greeting');

// Using a built-in module
console.log(colors.blue('Current file:', path.basename(__filename)));

// Using a third party module
console.log(colors.green('This text is green'));

// Using a custom module
console.log(greeting.sayHello('Samuel'));
console.log(greeting.sayGoodbye('Samuel'));