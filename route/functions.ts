function addition (a : number, b : number):number{
    return a + b
}

console.log(addition(4,6))

// Use void when the function doesn't return anything
function logMessage(message : string):void{
    console.log(message)
}

logMessage('hello typescript')

// Optional Parameters
function addthree(a : number, b: number , c?:number):number{
    return a + b + (c || 0)
}
console.log(addthree(2,3))

// Default Parameters
function calculateTax (price : number , taxRate : number = 0.18):number{
    return price * taxRate
}
console.log(calculateTax(100))
console.log(calculateTax(100,0.36))

//Arrow Functions
const multiply = (a : number , b : number ):number =>{
    return a * b;
}
console.log(multiply(5,8))

const namePrint = (name : string): void =>{
    console.log('My name is',name)
}
namePrint('vahid')

//Function Type Aliases
type mathOperations = (a: number , b : number ) => number

const add : mathOperations = (x , y) => x + y
const substract : mathOperations = (x,y) => x - y
const mult : mathOperations = (a,b) => a * b

console.log(add(44,9))
console.log(add(33,8))
console.log(add(5,3))

type CreateUserFn = (name: string, age: number) => { id: number; name: string };

const createUser: CreateUserFn = (name, age) => {
  return { id: Math.floor(Math.random() * 1000), name };
};

type logger = (message : string) => void

const logMessag : logger = (msg) => {
    console.log(msg)
}