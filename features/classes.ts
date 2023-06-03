class Vehicle {
  protected start(): void {
    console.log('Starting!');
  }
  stop(): void {
    console.log('Stopping!');
  }
}

// Child class override super/parent method
class Car extends Vehicle {
  private drive(): void {
    console.log('Car is starting!');
  }
  startDriving(): void {
    this.start();
    this.drive();
  }
}

const car = new Car();
car.startDriving();
car.stop();
