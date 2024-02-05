interface OldCalc {
  operations: (term1: number, term2: number, operation: string) => number;
}

interface NewCalc {
  add: (term1: number, term2: number) => number;
  sub: (term1: number, term2: number) => number;
}

class OldCalculator implements OldCalc {
  operations = function (term1: number, term2: number, operation: string) {
    switch (operation) {
      case 'add':
        return term1 + term2;
      case 'sub':
        return term1 - term2;
      default:
        return NaN;
    }
  };
}

class NewCalculator implements NewCalc {
  add = function (term1: number, term2: number) {
    return term1 + term2;
  };
  sub = function (term1: number, term2: number) {
    return term1 - term2;
  };
}

class CalculatorAdapter {
  operations: (term1: number, term2: number, operation: string) => number;
  constructor() {
    const newCalculator = new NewCalculator();
    this.operations = function (term1, term2, operation) {
      switch (operation) {
        case 'add':
          return newCalculator.add(term1, term2);
        case 'sub':
          return newCalculator.sub(term1, term2);
        default:
          return NaN;
      }
    };
  }
}
const oldCalc = new OldCalculator();
const adaptedCalc = new CalculatorAdapter();
console.log(oldCalc.operations(3, 2, 'add')); // Output: 5
console.log(adaptedCalc.operations(3, 2, 'add')); // Output: 5
