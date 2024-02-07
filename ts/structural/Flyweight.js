// class Book {
//   title: string;
//   author: string;
//   isBan: string;
//   constructor(title: string, author: string, isBan: string) {
//     this.title = title;
//     this.author = author;
//     this.isBan = isBan;
//   }
// }
// const books = new Map();
// function createBook(title: string, author: string, isBan: string) {
//   const existBook = books.has(isBan);
//   if (existBook) {
//     return books.get(isBan);
//   }
//   const book = new Book(title, author, isBan);
//   books.set(isBan, book);
//   return book;
// }
// const booksList: Book[] = [];
// function addBook(
//   title: string,
//   author: string,
//   isBan: string,
//   availability: boolean,
//   sale: number
// ) {
//   const book = {
//     ...createBook(title, author, isBan),
//     availability,
//     sale,
//   };
//   booksList.push(book);
//   return book;
// }
// addBook('Never Give Up', 'Mohamed Brzan', 'AB123', true, 100);
// addBook('Never Give Up', 'Mohamed Brzan', 'AB123', true, 100);
// addBook('Never Give Up', 'Mohamed Brzan', 'AB123', true, 100);
// addBook('Never Give Up', 'Mohamed Brzan', 'AB123', true, 100);
// addBook('Never Give Up', 'Mohamed Brzan', 'AB123', true, 100);
// addBook('Data Analysis','Ali Fouad','BD123',false,4)
// console.log(booksList);
var Flyweight = /** @class */ (function () {
    function Flyweight(sharedState) {
        this.sharedState = sharedState;
    }
    Flyweight.prototype.operation = function (uniqueState) {
        console.log("Flyweight: sharedState (".concat(this.sharedState, ") and uniqueState (").concat(uniqueState, ")"));
    };
    return Flyweight;
}());
var FlyweightFactory = /** @class */ (function () {
    function FlyweightFactory() {
        this.flyweights = {};
    }
    FlyweightFactory.prototype.getFlyweight = function (sharedState) {
        if (!this.flyweights[sharedState]) {
            this.flyweights[sharedState] = new Flyweight(sharedState);
        }
        return this.flyweights[sharedState];
    };
    FlyweightFactory.prototype.getFlyweightCount = function () {
        return Object.keys(this.flyweights).length;
    };
    return FlyweightFactory;
}());
var factory = new FlyweightFactory();
var flyweight1 = factory.getFlyweight('sharedState 1');
var flyweight10 = factory.getFlyweight('sharedState 10');
flyweight1.operation('uniqueState 1');
flyweight10.operation('uniqueState 10');
console.log(flyweight1);
console.log(factory.getFlyweightCount());
