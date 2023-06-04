import { faker } from '@faker-js/faker';
import { IMappable } from './CustomMap';

export class Company implements IMappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;
  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
    this.color = faker.color.human();
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
