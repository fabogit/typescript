class Vehicle {
  constructor(public color: string) {
    // this.color = color; not needed if using public/protected/private modifiers
  }
  protected start(): void {
    console.log('Starting!');
  }
  protected honk(): void {
    console.log('Beep!');
  }
  stop(): void {
    console.log('Stopping!');
  }
}

// Child class override super/parent method
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('Car is starting!');
  }
  startDriving(): void {
    this.start();
    this.drive();
  }
}

const car = new Car(4, 'red');
console.log(car.color);
car.startDriving();
car.stop();
