// ES Module were introduced in - ECMAScript 2015 (ES6) to support modular JavaScript
// Before ESM, developers use cjs like require, module.export to orgainise JS code into modules

// With ESM code base are more modular, cleaner and easy to optimise
// Example no more require, __fileName, module.exports


// ESM keywords

import space from "../module.js"

// console.log(__filename) - // cjs this won't work anymore
console.log(import.meta.url);
// new way - esm

// named import
import {no_of_students, track, foodBank, Student} from "./my_modules/mod.js";

// default export that they do not adhere to a particular name - we can name it anything
import wave from "./my_modules/default.js";

// we may have imports with the same name so we use Renamed Imports we use alias to prevent clash
// e.g number_of_student is clashing

import { no_of_students as student_no} from "./my_modules/default.js";

console.log(track);
console.log(no_of_students);
console.log(foodBank("Samuel"));
let studentData = new Student("Matthew", 60)

console.log(studentData.details());

// default export don't have that to be the same name 
console.log(wave("Alex"));

// We can also use: import @foodBank from "@my_modules/module.js"

space();

console.log(student_no);

// When we are exporting from another folder we need to export everything using asterisk *

// index.js is the export point that export all the custom modules in the utils folder

import { testOne, testTwo } from "./utils/index.js";
import { samMessage } from "./utils/index.js";

console.log(testOne());
console.log(testTwo());
console.log(samMessage);















