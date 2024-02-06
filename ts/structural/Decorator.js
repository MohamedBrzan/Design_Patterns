var MackBook = /** @class */ (function () {
    function MackBook(cost) {
        this.cost = cost;
    }
    MackBook.prototype.getCost = function () {
        return this.cost;
    };
    return MackBook;
}());
function Memory(mb) {
    mb.cost = 77 + mb.getCost();
}
function Keyboard(mb) {
    mb.cost = 66 + mb.getCost();
}
function Engraving(mb) {
    mb.cost = 101 + mb.getCost();
}
var mb = new MackBook(300);
Memory(mb);
Keyboard(mb);
Engraving(mb);
console.log(mb.getCost());
