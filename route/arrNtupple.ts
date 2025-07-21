let numbers : number[] = [2,4,6,8]
let namess : string[] = ['vahid','kaif','zaid','husnain']

console.log(numbers)
console.log(namess)

type userss = {
    name : string,
    age : number
}

let Userr : userss[] = [
    {name : 'vahid',age:20},
    {name : 'husnain', age:21},
    {name : 'zaid', age:23}
]

    const numberss: readonly number[] = [1, 2, 3];
    // numbers.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'.
    // numbers[0] = 5;  // Error: Index signature in type 'readonly number[]' only permits reading.

let newtupple : [string,number] = ['vahid',20]
console.log(newtupple)

type userinfo = [string, number,boolean]

const user11 :userinfo = ["husnain", 22, true]



type result = [string, number]

const getUser = ():result =>{
    return ['Pass', 99]
}
console.log(getUser())

// Optional Tuple Elements
type ErrorTuple = [string, number?];

let err1: ErrorTuple = ["Not found"];
let err2: ErrorTuple = ["Server error", 500];
