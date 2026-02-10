export const no_of_students = 70;
export const track = "Backend";

// Named export - individually

export function foodBank(student) {
    let food = ["Rice", "Beans", "Yam", "Garri", "Corn Flakes", "Noodles", "Pap"];

    if (student.toLowerCase() === "samuel") {
        return food.filter(food => food === "Garri");
    }

}

export class Student{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    details(){
        return `I am ${this.name} and my age is ${this.age}`;
    }
}



