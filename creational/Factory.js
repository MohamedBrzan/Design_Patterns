// Superclass
class Animal {
  constructor(name) {
    this.name = name;
    this.sayName = function () {
      console.log('My name is ' + this.name);
    };
  }
}

// Subclass
class Dog extends Animal {
  constructor(name) {
    super(name);
    this.bark = function () {
      console.log('Woof, woof!');
    };
  }
}

// Subclass
class Cat extends Animal {
  constructor(name) {
    super(name);
    this.meow = function () {
      console.log('Meow, meow!');
    };
  }
}

// Factory
function AnimalFactory() {}

AnimalFactory.createAnimal = function (name, type) {
  switch (type) {
    case 'dog':
      return new Dog(name);
    case 'cat':
      return new Cat(name);
    default:
      throw new Error('Invalid animal type');
  }
};

// Usage
var dog = AnimalFactory.createAnimal('Freya', 'dog');
dog.sayName(); // My name is Freya
dog.bark(); // Woof, woof!

var cat = AnimalFactory.createAnimal('Lily', 'cat');
cat.sayName(); // My name is Lily
cat.meow(); // Meow, meow!
