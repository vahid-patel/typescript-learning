class Person {
    name: string;
    age: number;

    constructor(one : string, two : number){
        this.name = one
        this.age = two
    }

    greet():void {
        console.log(`Hello ${this.name}`)
    }
}

const obj = new Person('vahid',20)

obj.greet()

// | Modifier    | Meaning                         |
// | ----------- | ------------------------------- |
// | `public`    | accessible everywhere (default) |
// | `private`   | only inside the class           |
// | `protected` | inside the class & subclasses   |

class BankAccount {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}

const acc = new BankAccount(1000);
acc.deposit(500);
console.log(acc.getBalance()); // ✅ OK
// acc.balance = 0; ❌ Error: balance is private


class Circle {
  readonly pi: number = 3.14;
}

const c = new Circle();
console.log(c.pi);     // ✅ 3.14
// c.pi = 3.1415;      ❌ Error: readonly


//Readonly use
class Userrr {
  constructor(
    public name: string,
    private password: string,
    readonly role: string
  ) {}
}

const u = new Userrr("Vahid", "secret123", "admin");
console.log(u.name); // Vahid
console.log(u.role); // admin
// u.password ❌ Error: private
// u.role = "user"; ❌ Error: readonly


//Implements
interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(msg: string) {
    console.log("LOG:", msg);
  }
}

// Extending Interfaces
interface Animal {
  name: string;
}

interface Dogs extends Animal {
  bark(): void;
}

const pet: Dogs = {
  name: "Tommy",
  bark() {
    console.log("Woof!");
  }
};

