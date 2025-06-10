var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var btn = document.getElementById("btn");
var add = function (val1, val2) {
    return val1 + val2;
};
btn.addEventListener("click", function () {
    var a = num1.value;
    var b = num2.value;
    console.log(add(+a, +b));
});
// cause error because type changing
// let person = "Ahmed";
// person = 3;
var arr = ["Apple", "Mango"];
arr.push("Banana");
console.log(arr);
var arr2 = [1, 2, 3];
arr2.push(5);
