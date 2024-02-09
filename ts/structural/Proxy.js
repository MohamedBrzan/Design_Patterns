var ProxyClass = /** @class */ (function () {
    function ProxyClass(obj) {
        this.obj = obj;
    }
    ProxyClass.prototype.get = function (prop) {
        console.log("fetch ".concat(prop, " property from the object => ").concat(this.obj[prop]));
    };
    ProxyClass.prototype.set = function (prop, value) {
        if (!this.obj[prop]) {
            this.obj[prop] = value;
            return this.obj;
        }
        this.obj[prop] = value;
        return this.obj;
    };
    return ProxyClass;
}());
var user = {
    name: 'mohamed',
    age: 22,
};
var personalProxy = new ProxyClass(user);
personalProxy.get('name');
