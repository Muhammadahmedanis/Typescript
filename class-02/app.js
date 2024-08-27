var person = {
    name: "Ali",
    rno: 132,
    hobbies: ["reading", "playing"],
};
person.email = "test@gmail.com";
var persons = [];
persons.push({
    name: "hamza",
    rno: 678,
    hobbies: ["football"],
    email: "hamza@gmail.com",
});
var add = function (val1, val2) {
    return val1 + val2;
};
var func;
func = add;
var add1 = function (val1, val2, calc) {
    if (calc === "add") {
        return val1 + val2;
    }
    else if (calc === "sub") {
        return val1 - val2;
    }
};
console.log(add1(10, 5, "add"));
// tuple
var gender = ["Ali", 12];
gender[0] = "asad";
gender.push(8);
var error = [404, "user not found"];
var Student = /** @class */ (function () {
    function Student(name, rno) {
        this.name = name;
        this.rno = rno;
    }
    return Student;
}());
var std1 = new Student("Amir", 78);
console.log(std1);
