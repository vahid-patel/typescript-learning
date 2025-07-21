"use strict";
let val;
val = 1;
val = 'one';
console.log(val);
function printId(id) {
    console.log('ID : ', id);
}
printId('123abc');
printId(1001);
function printInput(input) {
    if (typeof input === 'string') {
        console.log(input.toUpperCase());
    }
    else {
        console.log(input.toFixed(2));
    }
}
function animalSound(animal) {
    if ('bark' in animal) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
const dog = {
    bark: () => console.log("Woof!"),
};
const cat = {
    meow: () => console.log("Meow!"),
};
animalSound(dog);
animalSound(cat);
class Car {
    drive() {
        console.log('driving');
    }
}
class Bike {
    ride() {
        console.log('riding');
    }
}
function move(vehicle) {
    if (vehicle instanceof Car)
        vehicle.drive();
    else
        vehicle.ride();
}
const myCar = new Car();
const myBike = new Bike();
move(myCar);
move(myBike);
