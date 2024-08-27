type Person = {
    name: string;
    rno: number;
    hobbies: string[];
    email?: string;
}

let person : Person = {
    name: "Ali",
    rno: 132,
    hobbies: ["reading", "playing"],
}
person.email = "test@gmail.com";

const persons: Person[] = [];
persons.push({
    name: "hamza",
    rno: 678,
    hobbies: ["football"],
    email: "hamza@gmail.com",
})

const add = function (val1 : number, val2 : number) : number {
    return val1 + val2;
}

let func : (x : number, y : number) => number;
func = add;
//  |(union operator)

type Calc = "add" | "sub" // type literal 
const add1 = function (val1 : number, val2 : number, calc : Calc) {
    if(calc === "add"){
        return val1 + val2;
    } else if (calc === "sub"){
        return val1 - val2;
    }
};

console.log(add1(10, 5, "add"));

// tuple
let gender: [string, number] = ["Ali", 12];
gender[0] = "asad";
gender.push(8);
let error:[number, string] = [404, "user not found"];


class Student{
    name: string;
    rno: number;
    constructor(name: string, rno: number){
        this.name = name;
        this.rno = rno;
    }
}

let std1 = new Student("Amir", 78);
console.log(std1);
