"use strict";
class Person {
    constructor(one, two) {
        this.name = one;
        this.age = two;
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
}
const obj = new Person('vahid', 20);
obj.greet();
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    getBalance() {
        return this.balance;
    }
}
const acc = new BankAccount(1000);
acc.deposit(500);
console.log(acc.getBalance());
class Circle {
    constructor() {
        this.pi = 3.14;
    }
}
const c = new Circle();
console.log(c.pi);
class Userrr {
    constructor(name, password, role) {
        this.name = name;
        this.password = password;
        this.role = role;
    }
}
const u = new Userrr("Vahid", "secret123", "admin");
console.log(u.name);
console.log(u.role);
class ConsoleLogger {
    log(msg) {
        console.log("LOG:", msg);
    }
}
const pet = {
    name: "Tommy",
    bark() {
        console.log("Woof!");
    }
};
