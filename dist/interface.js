"use strict";
const user_1 = {
    name: 'vahid',
    age: 20
};
console.log(user_1);
const appConfigure = { port: 3000 };
const usser = {
    name: 'kaif',
    greet() {
        console.log(`Hello ${this.name}`);
    }
};
const adds = (x, y) => x + y;
console.log(adds(5, 8));
const dogs = {
    name: 'rocky',
    breed: 'golden retriever'
};
console.log(dogs);
class consoleLogger {
    log(msg) {
        console.log(msg);
    }
}
const newlog = new consoleLogger;
newlog.log('hello typescript');
