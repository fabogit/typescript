interface IReport {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  isBroken: true,
  summary(): string {
    return `Car model name: ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  isCarbonated: true,
  sugar: 40,
  summary(): string {
    return `This drink has ${this.sugar} % of sugar`;
  },
};

const printSummary = (item: IReport): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
