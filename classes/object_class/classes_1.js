import space from "../module.js";

// Classes defines a template for object, alowing us to create ultiple objects wth the same structures and behaviours


// We are dealing withh OOP

// For classes we have the class keyword and the onstructor keyword

// Defining classes is like defning function but with without brackets ()
// So how does a class taking parameters - that is where constructir comes to play

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }

    // Method
    greet() {
        console.log(`Hello my name is ${this.name}, I'm ${this.age} years`);
    }
    
}

// When we wan to create a new object we use the 'new' keyword whhich creates an instance of the class

// Constructor is a function, but it cannot be called

class Car {
    constructor(brand, color, year, model, doors = 4){
        
        
        this.brand = brand;     // brand is made globally available so that carName can use it too outside the constructor

        this.color = color;
        this.year = year;
        this.model

        console.log(brand, color, year, model, doors);
    }

    // door as default value so it is placed at the end of the parameters

    carName(owner) {
        return "Samuel's car: " + this.brand + " " + this.year;
    }
}

space();

const myCar = new Car();    // New instance
console.log(myCar);

space();

const samuelCar = new Car("toyota", "red", "2025", "Corolla", 4);
console.log(samuelCar);

space()

console.log(samuelCar.year)
console.log(samuelCar.color)

space()

console.log(samuelCar.carName("Samuel"));

// Also we can make the paramters destructured as object


// Static classes

class MathHelper {
    static add(a, b){
        return a + b;
    }

    static sub(a, b){
        return a - b;
    }
}

// What the static method do is that it calls the method on the instance of that class
// It is like the method of the class itself ignoring the constructor

console.log(MathHelper.add(3, 4));

// Instead of using 'new' Method then instance then 

// static can be called at any point in time

// Use cases:  We use it when we have a collection of methods doing almost similar things but they don't relate to each other

// Research on use of static

// We can add as many static methods as we want