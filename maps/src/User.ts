import { faker } from '@faker-js/faker';
import { IMappable } from './CustomMap';

export class User implements IMappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;
  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
    this.color = faker.color.human();
  }
  markerContent(): string {
    return `
		<div>
			<h2>User name: ${this.name}</h2>
		</div>
		`;
  }
}
