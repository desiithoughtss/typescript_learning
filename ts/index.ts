// let a1: string = "1";
// a1 = "2";

// function add1(a: number, b: string): string {
//   return a + b;
// }

// console.log(add1(1, "a"));

// Basic types
let num: number = 123_456_789;
let chars: string = "coding";
let isAvailable = true;
const isThere = true;

let val: undefined = undefined;
let nul: null = null;

let obj: { name: string; type: number } = {
  name: "a",
  type: 1,
};

// any type
let data: any = "Hello";
data = 9;
data = { obj: "1" };

function tesAnyType(val: any) {
  console.log(val);
}

// obj = { ...obj, isCompleted: true }; // shows error

let varArray: [number, string] = [1, "A"];

// arrays

let numArray: number[] = [1, 2, 3, 4, 5, 6];
let charArray: string[] = ["a", "b", "c"];
charArray.forEach((val) => console.log(val.length));

// tuples
let arr: [number, string] = [1, "a"];
let coordinates3d: [number, number, number] = [10, 20, 30];
