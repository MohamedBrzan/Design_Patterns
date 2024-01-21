//* Car
class Car {
  constructor() {
    this.name = 'Car';
    this.wheel = 4;
  }
  turnOn = () => 'Viiiiiiiiiiiiiin';
}

//* Truck
class Truck {
  constructor() {
    this.name = 'Truck';
    this.wheel = 8;
  }
  turnOn = () => '5iiiiiiiiiiiiiiin';
}

//* Motorcycle
class Motorcycle {
  constructor() {
    this.name = 'Motorcycle';
    this.wheel = 2;
  }
  turnOn = () => '5in5in5in5in5in';
}

const vehicleFactory = {
  createVehicle: (type) => {
    switch (type) {
      case 'car':
        return new Car();
      case 'truck':
        return new Truck();
      case 'motorcycle':
        return new Motorcycle();
      default:
        throw new Error('Invalid vehicle type');
    }
  },
};
const myCar = vehicleFactory.createVehicle('car');
console.log(myCar.name);
console.log(myCar.wheel);
console.log(myCar.turnOn());
