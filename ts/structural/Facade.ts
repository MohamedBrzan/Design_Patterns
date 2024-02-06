class SubSystemA {
  method() {
    console.log('this is method from subSystem A');
  }
}

class SubSystemB {
  method() {
    console.log('this is method from subSystem B');
  }
}

class SubSystemC {
  method() {
    console.log('this is method from subSystem C');
  }
}

class Facade {
  subsystemA: SubSystemA;
  subsystemB: SubSystemB;
  subsystemC: SubSystemC;

  constructor(
    subsystemA?: SubSystemA,
    subsystemB?: SubSystemB,
    subsystemC?: SubSystemC
  ) {
    this.subsystemA = subsystemA || new SubSystemA();
    this.subsystemB = subsystemB || new SubSystemB();
    this.subsystemC = subsystemC || new SubSystemB();
  }

  commonInterface() {
    this.subsystemA.method();
    this.subsystemB.method();
    this.subsystemC.method();
  }
}

const facade = new Facade();
console.log(facade.commonInterface());
