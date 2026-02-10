function sayHello(name){
    return `Hello ${name}! Welcome to Samuel's hotel`;
}

function sayGoodBye(name){
    return `Goodbye ${name}, thank you for visiting Samuel's hotel`;
}

// We are exporting using cjs
module.exports = {
    sayHello,
    sayGoodBye
}


// function add(a, b){
//     return a + b;
// }

// Picture module.export like this
// console.log(add = 3 + 4)