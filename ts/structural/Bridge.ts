interface Color {
  log(): string;
}

abstract class Shape {
  color: Color;
  constructor(color: Color) {
    this.color = color;
  }

  logMe() {
    return `I'm ${this.color.log()} Shape`;
  }
}

class Red implements Color {
  log() {
    return 'red';
  }
}

class Blue implements Color {
  log() {
    return 'blue';
  }
}

class Green implements Color {
  log(): string {
    return 'green';
  }
}

class Circle extends Shape {
  constructor(color: Color) {
    super(color);
  }

  logMe(): string {
    return `I'm ${this.color.log()} Circle`;
  }
}

class Triangle extends Shape {
  constructor(color: Color) {
    super(color);
  }

  logMe(): string {
    return `I'm ${this.color.log()} Triangle`;
  }
}

class Square extends Shape {
  constructor(color: Color) {
    super(color);
  }

  logMe(): string {
    return `I'm ${this.color.log()} Square`;
  }
}

const circle = new Circle(new Red());
const triangle = new Triangle(new Green());

console.log(circle.logMe());
console.log(triangle.logMe());
