const enemy = {
  attack: () => console.log('Pim Pam Pum!'),
  flyAway: () => console.log('Flyyyy like an eagle!'),
};

const bug = {
  name: 'Buggy McFly',
  phrase: "Your debugger doesn't work with me!",
};

Object.setPrototypeOf(enemy, bug);

console.log(enemy.name);
