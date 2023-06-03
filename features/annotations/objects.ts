const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lon: 15,
  },
  // es15 method
  setAge(newAge: number): void {
    this.age = newAge;
  },
};

// If type is not inferred annotation needs to follow the object structure

// const age = profile.age
const { age }: { age: number } = profile; // {age} : number = profile -> not valid!

// const lat = profile.coords.lat
const {
  coords: { lat, lon },
}: { coords: { lat: number; lon: number } } = profile;
