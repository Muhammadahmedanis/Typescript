const num1 = document.getElementById("num1")! as HTMLInputElement;
const num2  = document.getElementById("num2")! as HTMLInputElement;
const btn = document.getElementById("btn")!;

const add = function (val1 : number, val2 : number) {
    return val1 + val2;
}

btn.addEventListener("click", () => {
    const a = num1.value;
    const b = num2.value;
    console.log(add(+a, +b));    
})

// cause error because type changing
// let person = "Ahmed";
// person = 3;

const arr: string[] = ["Apple", "Mango"];
arr.push("Banana");
console.log(arr);

const arr2: number[] = [1, 2, 3];
arr2.push(5);