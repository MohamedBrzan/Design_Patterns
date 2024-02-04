class OldCalculator {
  operations: (term1: any, term2: any, operation: any) => any;
  constructor() {
    this.operations = function (term1, term2, operation) {
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
}

class NewCalculator {
  add: (term1: any, term2: any) => any;
  sub: (term1: any, term2: any) => number;
  constructor() {
    this.add = function (term1, term2) {
      return term1 + term2;
    };
    this.sub = function (term1, term2) {
      return term1 - term2;
    };
  }
}
class CalculatorAdapter {
  operations: (term1: any, term2: any, operation: any) => any;
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
