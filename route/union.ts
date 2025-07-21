let val : number | string 

val = 1
val = 'one'
console.log(val)

function printId (id : number | string):void{
    console.log('ID : ', id)
}

printId('123abc')
printId(1001)

//Type Narrowing 
function printInput(input : number | string) {
    if(typeof input === 'string')
    {
        console.log(input.toUpperCase())
    }
    else{
        console.log(input.toFixed(2))
    }
}

type dog = {bark : () => void}
type cat = {meow : () => void}

function animalSound (animal : dog | cat){
    if('bark' in animal)
    {
        animal.bark()
    }
    else{
        animal.meow()
    }
}

const dog: dog = {
  bark: () => console.log("Woof!"),
};

const cat: cat = {
  meow: () => console.log("Meow!"),
};

animalSound(dog); 
animalSound(cat); 


class Car {
    drive(){
        console.log('driving')
    }
}
class Bike {
    ride(){
        console.log('riding')
    }
}

function move (vehicle : Car | Bike)
{
    if(vehicle instanceof Car)
        vehicle.drive()
    else
        vehicle.ride()
}

const myCar = new Car()
const myBike = new Bike()

move(myCar)
move(myBike)