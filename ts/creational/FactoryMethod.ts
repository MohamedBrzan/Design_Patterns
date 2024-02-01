class Factory {
  createVehicle(type: string, model: string, attributes: Attributes) {
    if (type === 'car') {
      return new Car(model, attributes);
    } else if (type === 'truck') {
      return new Truck(model, attributes);
    } else {
      return 'this type not defined yet';
    }
  }
}

interface Data {
  data(): string;
}

interface Attributes {
  wheels: number;
  color: string;
  year: number;
  light: {
    front: boolean;
    back: boolean;
  };
}

class Car implements Data {
  model: string;
  attributes: Attributes;
  constructor(model: string, attributes: Attributes) {
    this.model = model;
    this.attributes = attributes;
  }

  data(): string {
    return `the car model is ${this.model} with ${this.attributes.wheels} wheels and created in ${this.attributes.year}`;
  }
}

class Truck implements Data {
  model: string;
  attributes: Attributes;
  constructor(model: string, attributes: Attributes) {
    this.model = model;
    this.attributes = attributes;
  }

  data(): string {
    return `the truck model is ${this.model} with ${this.attributes.wheels} wheels and created in ${this.attributes.year}`;
  }
}

const factory = new Factory();
console.log(
  factory.createVehicle('car', 'audi', {
    wheels: 4,
    color: 'red',
    year: 2005,
    light: {
      front: true,
      back: true,
    },
  })
);
