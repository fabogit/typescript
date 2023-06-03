const drink = {
  color: 'brown',
  isCarbonated: true,
  sugar: 40,
};

// Tuples force a consistent type order
const mydrink: [string, boolean, number] = ['brown', true, 20];

// Type alias
type TDrink = [string, boolean, number];
const pepsi: TDrink = ['brown', true, 40];
const tea: TDrink = ['Yellow', false, 0];

pepsi[0] = 40; // ! error

// Tuple works but less information is present
const carSpecsTuple: [number, number] = [400, 3354];

const carSpecsObj = {
  horsepower: 400,
  weight: 3354,
};
