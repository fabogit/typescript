import { faker } from '@faker-js/faker';

export class Company {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }
  markerContent(): string {
    return `
    <div>
			<h2>Company name: ${this.name}</h2>
			<p>Catchphrase: ${this.catchPhrase}</p>
		</div>
		`;
  }
}
