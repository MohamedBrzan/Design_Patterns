//* superclass
class Animal {
  constructor(name) {
    this.name = name;
    this.sayName = () => console.log(`my name is ${this.name}`);
  }
}

//* subclass
class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  voice() {
    return 'HAAAOOOW';
  }
}

//* subclass
class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  voice() {
    return 'MeAAwww';
  }
}

class AnimalFactory {
  createAnimal(name, type) {
    switch (type) {
      case 'dog':
        return new Dog(name);
      case 'cat':
        return new Cat(name);
      default:
        throw new Error('Invalid animal type');
    }
  }
}

let dog = new AnimalFactory().createAnimal('pepo', 'dog');

console.log(dog.sayName());
console.log(dog.voice());
