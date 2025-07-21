interface person {
    name : string,
    age : number,

}

const user_1 : person ={
    name : 'vahid',
    age : 20
}
console.log(user_1)

interface Product {
  id: number;
  title: string;
  description?: string; // optional
}

interface Configure {
  readonly port: number;
}

const appConfigure: Config = { port: 3000 };
// appConfigure.port = 4000; // ❌ Error: Cannot assign to 'port'

// Interface with Methods
interface Person {
    name : string,
    greet():void
}

const usser : Person = {
    name :'kaif',
    greet(){
        console.log(`Hello ${this.name}`)
    }
}

// Interface for Functions
interface Mathfunctions {
    (a : number, b : number ) : number
}

const adds : Mathfunctions = (x,y) => x + y

console.log(adds(5,8))

//inheritance in interface
interface Animal {
    name : string
}

interface Dog extends Animal {
    breed : string
}

const dogs : Dog = {
    name : 'rocky',
    breed : 'golden retriever'
}

console.log(dogs)

interface looger {
    log(msg : string):void
}

class consoleLogger implements looger{
    log(msg : string) {
        console.log(msg)
    }
}

const newlog = new consoleLogger
newlog.log('hello typescript')