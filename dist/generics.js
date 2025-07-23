"use strict";
function echo(input) {
    return input;
}
console.log(echo("Hello"));
console.log(echo(123));
function printList(items) {
    items.forEach(item => console.log(item));
}
printList(["a", "b", "c"]);
printList([1, 2, 3]);
const userResponse = {
    success: true,
    data: { name: "Vahid", age: 25 },
};
class Box {
    constructor(content) {
        this.content = content;
    }
    get() {
        return this.content;
    }
}
const stringBox = new Box("Hello");
const numberBox = new Box(123);
