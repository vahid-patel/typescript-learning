"use strict";
let a = 34;
console.log(a);
let b = 'vahid';
console.log(b);
let isLoggedIn = true;
console.log(isLoggedIn);
let message = 'Heloo javascript';
console.log(message);
let value = 8;
value = 'stringvalue';
console.log(value);
let newvalue = "hello";
if (typeof newvalue === "string") {
    console.log(newvalue.toUpperCase());
}
function calculatePrice(price, isMember) {
    if (isMember)
        return price * 0.9;
    return price;
}
console.log(calculatePrice(100, true));
