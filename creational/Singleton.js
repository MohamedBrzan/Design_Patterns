//**************************************************
//******** Example with Object.freeze() ***********/
//**************************************************

//* Object Literal
const singletonObj = {
  config: () => 'hello world from config function',
  testing: () => 'this is testing function',
};

// console.log(singletonObj.config());
// console.log(singletonObj.testing());

Object.freeze(singletonObj); //* this is means you cannot add or remove

//* Class

class singletonClass {
  constructor() {
    this.name = 'Mohamed';
  }

  config() {
    return 'this is message from config in singleton constructor';
  }

  testing() {
    return 'this is message from testing in singleton constructor';
  }
}

const ex = new singletonClass();

Object.freeze(ex);
delete ex.name;

console.log(ex.name);

delete ex.config();
delete ex.testing();

console.log(ex.config());
console.log(ex.testing());

//**************************************************
//******** Example with instance variable ***********/
//**************************************************

const singletonVariable = (function () {
  let instance;

  function createInstance() {
    let object = new Object('this is instance');
    return object;
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

function run() {
  let instance1 = singletonVariable.getInstance();
  let instance2 = singletonVariable.getInstance();
  console.log(instance1, instance2);
  console.log(instance1 === instance2);
  console.log(instance1 instanceof instance2);
}

run();
