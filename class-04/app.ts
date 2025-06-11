// ( | ) union operator

let abc: string | number = "ali";
abc = 123;


type Animal = {
    name: string;
    runningSpeed: number;
}
type Bird = {
    name: string;
    flyingSpeed: number;
}

// type Creature = Animal | Bird;  // union types
// const tiger: Creature = {
//     name: "Tiger",
//     runningSpeed: 23,
// }

type Creature = Animal & Bird;  // Intersection types
const tiger: Creature = {
    name: "Tiger",
    runningSpeed: 23,
    flyingSpeed: 345,
}


//  Interfaces
interface Ani {
    Name: string;
    RunningSpeed: number;
}
interface Bir {
    Name: string;
    FlyingSpeed: number;
}

interface creature extends Ani, Bir {}
const lion: creature = {
    Name: "lion",
    RunningSpeed: 23,
    FlyingSpeed: 43,
}


// Type Guard

type Animals = {
    name: string;
    runningSpeed: number;
}
type Birds = {
    name: string;
    flyingSpeed: number;
}
type Creatures = Animals & Birds;

function log(creatures: Creatures) {
    if ("runningSpeed" in creatures) {      // type guard
        console.log(creatures.runningSpeed);
    }
}

// class 5 56min




// Type Casting
const input = document.getElementById("input")! as HTMLInputElement

//  when we have asyn task we use promise

// Generics why we use because typescript donot what return from promise so we use generics

const promiseFunc: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task complted");
    }, 1000);
})
promiseFunc.then((data) => {
    console.log(data.split(""));
})

type User = {
    name: string;
    rno: number;
}


const promiseFunc1: Promise<User> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: "Ali",
            rno: 234,
        });
    }, 1000);
})
promiseFunc1.then((data) => {
    console.log(data.name);
})



function merge<T extends object, U extends object>(objA:T, objB: U): T & U {
    return { ...objA, ...objB };
}
const merged = merge({name: "Ali"}, {id: 123});
console.log(merge.name);



// Decoraters
