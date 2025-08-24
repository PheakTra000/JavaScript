function greet(name) {
    console.log(`Hello, ${name}`);
}
greet('Tra');


function add(a, b) {
    return a + b;
}
console.log(add(1, 2));

function subtract(a, b) {
    return a - b;
}
console.log(subtract(12,3));

function multiply(a, b) {
    return a * b;
}
console.log(multiply(2,4));

function divide(a, b) {
    return a / b;
}
console.log(divide(10,2));

function avg(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

let arr = [1,2,3,4,5];
console.log(avg(arr));


function introduce(name, age) {
    console.log(`Hi, my name is ${name} and I am ${age} years old.`);
}
introduce('Tra', 18);

function createCar(brand, model, year) {
    return {
        brand,
        model,
        year,
        getInfo: function() {
            return `${this.brand} ${this.model} ${this.year}`; 
        }
    }
}
const myCar = createCar('Lambo', 'x200', '2026');
console.log(myCar.getInfo());

