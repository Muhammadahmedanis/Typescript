type Person = {
    name: string;
    rno: number;
    hobbies: string[];
    email?: string;    // (?) mean optional field
}

let person: Person = {
    name: "Ali",
    rno: 132,
    hobbies: ["reading", "playing"],   
};
person.email = "test@gmail.com";

const persons: Person[] = [];  // const persons (name)  ;  :Person[]= (type)  ;  [] (assign empty array)
persons.push({
    name: "Hamza",
    rno: 234,
    hobbies: ["CCricket"],
    email: "test@gmail.com",
})



// const addtiton = function (val1: number, val2: number, cb: (x :string) => string) : number {  // (:number)  mean tell return type
//     cb("hello");
//     return val1 + val2
// }

// let func: (x: number, y:number, cb: (x :string) => string) => number;
// func = addtiton;


type Calc = "add" | "sub"  // type literls ( | )
const addtiton = function (val1: number, val2: number, calc: Calc) {
    if(calc === "add"){
        return val1 + val2
    }else if(calc === "sub"){
        return val1 - val2
    }
}
console.log(addtiton(2, 3, "add"));


//  |(union operator)

let gender: [string, string] = ["Male", "Female"];
gender[0] = "asad";
gender.push("hamza"); // this is a issue from typescript

let error: [number, string] = [404, "Not Found"];


// class Student{
//     name: string;
//     rno: number;
//     constructor(name: string, rno: number){
//         this.name = name;
//         this.rno = rno;
//     }
// }

class Student{
    private skills: string[] = [];
    constructor(public name: string, public readonly rno: number){
        this.name = name;
        this.rno = rno;
    }

    addSkill(skill: string){
        this.skills.push(skill);
    }
}
let std1 = new Student("Amir", 78);
std1.addSkill("reading");
console.log(std1);

