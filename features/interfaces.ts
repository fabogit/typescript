interface ICar {
  name: string;
  year: Date;
  isBroken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  isBroken: true,
  summary(): string {
    return `Summary\n Name: ${this.name} Year: ${this.year} Broken? ${this.isBroken}`;
  },
};

const printVehicle = (car: ICar): void => {
  console.log(car.summary());
};

printVehicle(oldCivic);
