// Ts will infer only the type returned by a function
// function arguments are not inferred

//  arrow function
const add = (a: number, b: number): number => {
  return a + b;
};

// named function
function divide(a: number, b: number): number {
  return a + b;
}

// anonimous function assigned to var
const multilpy = function (a: number, b: number): number {
  return a * b;
};
