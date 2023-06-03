// const carMakers: string[] = []
const carMakers = ['ford', 'toyota', 'ferrari'];

// const innerArray: string[][] = []
const carsByMaker = [
  ['f150', 'mustang'],
  ['corolla', 'prius'],
  ['testa rossa', 'f50 gt'],
];

const dates = [new Date(), new Date()];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100); // !error

// Help with helpers like map/reduce...
carMakers.map((car): string => {
  return car.toUpperCase();
});
