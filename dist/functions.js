"use strict";
function addition(a, b) {
    return a + b;
}
console.log(addition(4, 6));
function logMessage(message) {
    console.log(message);
}
logMessage('hello typescript');
function addthree(a, b, c) {
    return a + b + (c || 0);
}
console.log(addthree(2, 3));
function calculateTax(price, taxRate = 0.18) {
    return price * taxRate;
}
console.log(calculateTax(100));
console.log(calculateTax(100, 0.36));
const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(5, 8));
const namePrint = (name) => {
    console.log('My name is', name);
};
namePrint('vahid');
const add = (x, y) => x + y;
const substract = (x, y) => x - y;
const mult = (a, b) => a * b;
console.log(add(44, 9));
console.log(add(33, 8));
console.log(add(5, 3));
const createUser = (name, age) => {
    return { id: Math.floor(Math.random() * 1000), name };
};
