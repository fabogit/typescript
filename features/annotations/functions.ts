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

// Return void
const logger = (message: string): void => {
  console.log(message);
  // return undefined
};

const maybeError = (message: string): void => {
  if (!message) {
    throw new Error('Err!');
  }
};

// Return never, when unreachable code and function will never return anything
const throwError = (message: string): never => {
  throw new Error(message);
};

// Destructuring with Annotations
const todaysWheater = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

logWeather(todaysWheater);

// ES2015 - Destructuring then Annotate
const ES15 = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date);
  console.log(weather);
};
