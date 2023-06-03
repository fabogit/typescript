// Type Annotation
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

//  Array
let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function, annotation for the variable logNumber
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Function that return the 'any' type
const json = '{"x":10, "y":20}';
let coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x:10, y: 20}

// 2) When we declare a variable on a line and initialize it later
let words = ['red', 'green', 'blue'];
// let foundWord; => will set the 'any' type
let foundWord: boolean;
// let foundWord = false; => will infer bool type

for (const word of words) {
  if (word === ' green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbersList = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (const number of numbersList) {
  if (number > 0) {
    numberAboveZero = number;
  }
}
