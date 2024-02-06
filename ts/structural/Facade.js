var SubSystemA = /** @class */ (function () {
    function SubSystemA() {
    }
    SubSystemA.prototype.method = function () {
        console.log('this is method from subSystem A');
    };
    return SubSystemA;
}());
var SubSystemB = /** @class */ (function () {
    function SubSystemB() {
    }
    SubSystemB.prototype.method = function () {
        console.log('this is method from subSystem B');
    };
    return SubSystemB;
}());
var SubSystemC = /** @class */ (function () {
    function SubSystemC() {
    }
    SubSystemC.prototype.method = function () {
        console.log('this is method from subSystem C');
    };
    return SubSystemC;
}());
var Facade = /** @class */ (function () {
    function Facade(subsystemA, subsystemB, subsystemC) {
        this.subsystemA = subsystemA || new SubSystemA();
        this.subsystemB = subsystemB || new SubSystemB();
        this.subsystemC = subsystemC || new SubSystemB();
    }
    Facade.prototype.commonInterface = function () {
        this.subsystemA.method();
        this.subsystemB.method();
        this.subsystemC.method();
        return;
    };
    return Facade;
}());
var facade = new Facade();
console.log(facade.commonInterface());
