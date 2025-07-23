function echo<T>(input: T): T {
  return input;
}

console.log(echo<string>("Hello")); // "Hello"
console.log(echo<number>(123));     // 123

//generics in array
function printList<T>(items: T[]): void {
  items.forEach(item => console.log(item));
}

printList<string>(["a", "b", "c"]);
printList<number>([1, 2, 3]);

//Generics in interfaces
interface ApiResponse<T> {
  success: boolean;
  data: T;
}

const userResponse: ApiResponse<{ name: string; age: number }> = {
  success: true,
  data: { name: "Vahid", age: 25 },
};

// Generic Classes
class Box<T> {
  content: T;

  constructor(content: T) {
    this.content = content;
  }

  get(): T {
    return this.content;
  }
}

const stringBox = new Box<string>("Hello");
const numberBox = new Box<number>(123);
