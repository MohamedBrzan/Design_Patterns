var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(color) {
        this.color = color;
    }
    Shape.prototype.logMe = function () {
        return "I'm ".concat(this.color.log(), " Shape");
    };
    return Shape;
}());
var Red = /** @class */ (function () {
    function Red() {
    }
    Red.prototype.log = function () {
        return 'red';
    };
    return Red;
}());
var Blue = /** @class */ (function () {
    function Blue() {
    }
    Blue.prototype.log = function () {
        return 'blue';
    };
    return Blue;
}());
var Green = /** @class */ (function () {
    function Green() {
    }
    Green.prototype.log = function () {
        return 'green';
    };
    return Green;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color) {
        return _super.call(this, color) || this;
    }
    Circle.prototype.logMe = function () {
        return "I'm ".concat(this.color.log(), " Circle");
    };
    return Circle;
}(Shape));
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(color) {
        return _super.call(this, color) || this;
    }
    Triangle.prototype.logMe = function () {
        return "I'm ".concat(this.color.log(), " Triangle");
    };
    return Triangle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(color) {
        return _super.call(this, color) || this;
    }
    Square.prototype.logMe = function () {
        return "I'm ".concat(this.color.log(), " Square");
    };
    return Square;
}(Shape));
var circle = new Circle(new Red());
var triangle = new Triangle(new Green());
console.log(circle.logMe());
console.log(triangle.logMe());
