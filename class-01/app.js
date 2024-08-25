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
