// let a:number | string = "10";
// console.log(a);

let sum = (c:number, d:number): number => { 
    let tax = 100;
    return c + d + tax;
};
console.log(sum(2, 4));

type Std = {
    firstName: string;
    phone: number;
    class?: string;
}

// interface Std{
//     firstName: string;
//     phone: number;
// }

// let student: Std = {
//     firstName: "Ali",
//     phone: 5679,
// }
// student.class = "web & app";
// console.log(student);


// let arr:string[] = ["apple", "orange"]; 
// let arr: Array<String> = ["Apple", "orange"];

// let arr1: Std[]= [
//     {
//         firstName: "Ali",
//         phone: 5679,
//     }
// ]

// function add() :void {
// }

// enum  Numeric {
//     firstVal = 1, 
//     secondVal,
// }
// console.log(Numeric.firstVal);

// tuple
// let y : [string, number];
// y = ["saylani", 2002];
// console.log(y[0]);
