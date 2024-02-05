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
var Component = /** @class */ (function () {
    function Component() {
    }
    Component.prototype.print = function () {
        throw new Error('override this method');
    };
    Component.prototype.sizeFunc = function () {
        throw new Error('override this method');
    };
    return Component;
}());
var FileClass = /** @class */ (function (_super) {
    __extends(FileClass, _super);
    function FileClass(name, size, location) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.size = size;
        _this.location = location;
        return _this;
    }
    FileClass.prototype.sizeFunc = function () {
        return this.size;
    };
    return FileClass;
}(Component));
var FolderClass = /** @class */ (function (_super) {
    __extends(FolderClass, _super);
    function FolderClass(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.files = [];
        return _this;
    }
    FolderClass.prototype.add = function (file) {
        this.files.push(file);
    };
    FolderClass.prototype.delete = function (file) {
        var index = this.files.indexOf(file);
        index > -1 && this.files.splice(index, 1);
    };
    FolderClass.prototype.print = function () {
        this.files.forEach(function (file) { return "this.is ".concat(file.name, " file"); });
    };
    return FolderClass;
}(Component));
var file = new FileClass('document.txt', 10, 'c:/private/data');
var folder = new FolderClass('myData');
folder.add(file);
console.log(folder);
var root = new FolderClass('root');
root.add(folder);
console.log('file system structure');
console.log(root);
