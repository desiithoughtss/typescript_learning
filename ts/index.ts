// let a1: string = "1";
// a1 = "2";

// function add1(a: number, b: string): string {
//   return a + b;
// }

// console.log(add1(1, "a"));

// Basic types
let num: number = 123_456_789;
let chars: string = "coding";
let isAvailable = true; // on hover we get the the type boolan
const isThere = true; // on hover we get the value

let val: undefined = undefined;
let nul: null = null;

/* let obj: object = {
  name: "a",
  type: 1,
};
obj = { ...obj, isCompleted: true }; // if we assign it to object */

let obj: { name: string; type: number } = {
  name: "a",
  type: 1,
};
// obj = { ...obj, isCompleted: true }; // if we assign it to object

// any type
let data: any = "Hello";
data = 9;
data = { obj: "1" };

function tesAnyType(val: any) {
  console.log(val);
}

let varArray: [number, string] = [1, "A"];

// arrays

let numArray: number[] = [1, 2, 3, 4, 5, 6];
let charArray: string[] = ["a", "b", "c"];
charArray.forEach((val) => console.log(val.length));

// tuples
let arr: [number, string] = [1, "a"];
let coordinates3d: [number, number, number] = [10, 20, 30];

// enums
const enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue",
}
console.log(Color.Blue);

// let color: Color = Color.Green;

// unknown type
let notSure: unknown = "a";
// notSure.toUpperCase(); // this will result in the error
if (typeof notSure === "number") {
  notSure.toFixed(2);
} else if (typeof notSure === "string") {
  notSure.toUpperCase();
}
console.log(notSure);

// void type
function logMessage(message: string): void {
  console.log(message);
  return undefined; // this is valid
}

// type assertions
let someValue: any = "Hello World";
let stringLength: number = (someValue as string).length;
console.log(stringLength);

// union types
let id: string | number | boolean;
id = "a";
id = 9;
id = "true";

function unionFunction(id: string | number) {
  console.log(id);
}

// type narrowing
function unionFunctionNarrowing(id: string | number) {
  if (typeof id === "string") {
    console.log(` id is a strig:`, id.toUpperCase());
  } else {
    console.log(`is is the number:`, id.toFixed(2));
  }
}

// interface
interface Person {
  name: string;
  type?: number; // optional type
  greet(): void;
}

let person: Person = {
  name: "abc",
  type: 9, // if we will remove it it will not give the error
  greet() {
    console.log("hello");
  },
};

// interface with function
interface MathOp {
  (a: number, b: number): number;
}

const add: MathOp = (x, y) => x + y;
console.log(add(2, 3));

// type alias
type UserID = string;
let userId: UserID = "abc";

type Person1 = {
  name: string;
  age: number;
};

let person1: Person1 = {
  name: "abc",
  age: 22,
};

type ID = string | number;
let userId1: ID = "abc";
let orderId: ID = 101;

// interfaces
interface User {
  name: string;
  phone: number;
}

interface Customer extends User {
  address: string;
}

let myCustomer: Customer = {
  address: "abc",
  name: "a",
  phone: 123,
};

// type alias
type vehicle = {
  make: string;
  model: string;
};

// & denotes intersection types
type Car = vehicle & {
  isElectric: boolean;
};

let car: Car = {
  isElectric: true,
  make: "a",
  model: "any",
};

type Status = "active" | "inactive" | "pending";
let userStatus: Status = "active";

// intersection types

let config: { server: string; port: number } & {
  secure: boolean;
  timeout: number;
} = {
  server: "localhost",
  port: 8000,
  secure: true,
  timeout: 5000,
};

// functions
// regular
function anyFunction(a: number, b: number): number | string {
  return "hello";
}
anyFunction(2, 3);

// function expression
const divide = function (a: number, b: number): number {
  return a / b;
};

console.log(divide(8, 8));

// arrow function

const multiply = (a: number, b: number): number => {
  return a * b;
};

console.log(multiply(8, 8));

// optional & default parameters
function greet(username: string, greeting?: string) {
  return `${greeting ? greeting : ""} ${username}`;
}

console.log(greet("a"));

// default parameters
function greetOne(username: string, greeting: string = "hi") {
  return `${greeting ? greeting : ""} ${username}`;
}

console.log(greetOne("a"));

// function overloading
function getLength(value: string): number;
function getLength(value: any[]): number;
function getLength(value: any): number {
  return value.length;
}

// rest parameters

function sum(...numbers: number[]): number {
  return numbers.reduce((acc: number, value: number) => acc + value, 0);
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));

// class

class PersonClass {
  name: string;
  type: number;

  constructor(name: string, type: number) {
    this.name = name;
    this.type = type;
  }

  greetClass(): string {
    return `hello, name is ${this.name} and the type is ${this.type}`;
  }
}

const newPerson = new PersonClass("a", 9);
console.log(newPerson.greetClass());

// access modifiers (public, private, protected)
class CarClass {
  make: string;
  private model: string;
  protected type: number;

  constructor(make: string, model: string, type: number) {
    this.make = make;
    this.model = model;
    this.type = type;
  }

  getModel(): string {
    return this.model;
  }
}

const carOne = new CarClass("a", "b", 1);
console.log(carOne.getModel());

// inheritance

class Animal {
  constructor(public name: string) {}

  makeSound(): void {
    console.log("make sound");
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  makeSound(): void {
    console.log("dog sound");
  }
}

const dog = new Dog("dog");
console.log(dog.makeSound());

// generics, create components that work with different types with typesafety
function genFunc<T>(arg: T): T {
  return arg;
}
console.log(genFunc<number>(9));
console.log(genFunc<string>("hello"));
