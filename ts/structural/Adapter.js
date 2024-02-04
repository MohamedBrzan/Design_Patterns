var OldCalculator = /** @class */ (function () {
    function OldCalculator() {
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
    return OldCalculator;
}());
var NewCalculator = /** @class */ (function () {
    function NewCalculator() {
        this.add = function (term1, term2) {
            return term1 + term2;
        };
        this.sub = function (term1, term2) {
            return term1 - term2;
        };
    }
    return NewCalculator;
}());
var CalculatorAdapter = /** @class */ (function () {
    function CalculatorAdapter() {
        var newCalculator = new NewCalculator();
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
    return CalculatorAdapter;
}());
var oldCalc = new OldCalculator();
var adaptedCalc = new CalculatorAdapter();
console.log(oldCalc.operations(3, 2, 'add')); // Output: 5
console.log(adaptedCalc.operations(3, 2, 'add')); // Output: 5
