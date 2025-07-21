const car : {name : string, model : string, year : number} = {
    name : 'Toyota',
    model : 'Corolla',
    year : 2019
}

console.log(car.name)

type User = {
    name : string,
    age : number,
    isAdmin?: boolean
}

const user1 : User = {
    name : 'vahid',
    age : 20,
    // isAdmin : true
}

console.log(user1.name)

// You can pass any object matching the User type.
function greetUser(user: User): string {
  return `Hello, ${user.name}`;
}

console.log(greetUser(user1))

type Config = {
  readonly port: number;
};
// In TypeScript, readonly is a keyword used to make properties of objects, classes, and interfaces immutable. This means that once a readonly property is initialized, its value cannot be changed. It provides a way to enforce immutability and prevent accidental modifications, enhancing code reliability. 
const serverConfig: Config = { port: 3000 };
// serverConfig.port = 5000; // ❌ Error: Cannot assign to 'port'

console.log(serverConfig.port)
