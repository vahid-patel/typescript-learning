"use strict";
const car = {
    name: 'Toyota',
    model: 'Corolla',
    year: 2019
};
console.log(car.name);
const user1 = {
    name: 'vahid',
    age: 20,
};
console.log(user1.name);
function greetUser(user) {
    return `Hello, ${user.name}`;
}
console.log(greetUser(user1));
const serverConfig = { port: 3000 };
console.log(serverConfig.port);
