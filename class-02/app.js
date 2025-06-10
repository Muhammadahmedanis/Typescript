var person = {
    name: "Ali",
    rno: 132,
    hobbies: ["reading", "playing"],
};
person.email = "test@gmail.com";
var persons = []; // const persons (name)  ;  :Person[]= (type)  ;  [] (assign empty array)
persons.push({
    name: "Hamza",
    rno: 234,
    hobbies: ["CCricket"],
    email: "test@gmail.com",
});
var addtiton = function (val1, val2, calc) {
    if (calc === "add") {
        return val1 + val2;
    }
    else if (calc === "sub") {
        return val1 - val2;
    }
};
console.log(addtiton(2, 3, "add"));
//  |(union operator)
var gender = ["Male", "Female"];
gender[0] = "asad";
gender.push("hamza"); // this is a issue from typescript
var error = [404, "Not Found"];
// class Student{
//     name: string;
//     rno: number;
//     constructor(name: string, rno: number){
//         this.name = name;
//         this.rno = rno;
//     }
// }
// let std1 = new Student("Amir", 78);
// console.log(std1);
