var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Book = /** @class */ (function () {
    function Book(title, author, isBan) {
        this.title = title;
        this.author = author;
        this.isBan = isBan;
    }
    return Book;
}());
var books = new Map();
function createBook(title, author, isBan) {
    var existBook = books.has(isBan);
    if (existBook) {
        return books.get(isBan);
    }
    var book = new Book(title, author, isBan);
    books.set(isBan, book);
    return book;
}
var booksList = [];
function addBook(title, author, isBan, availability, sale) {
    var book = __assign(__assign({}, createBook(title, author, isBan)), { availability: availability, sale: sale });
    booksList.push(book);
    return book;
}
addBook('Never Give Up', 'Mohamed Brzan', 'AB123', true, 100);
addBook('Never Give Up', 'Mohamed Brzan', 'AB123', true, 100);
addBook('Never Give Up', 'Mohamed Brzan', 'AB123', true, 100);
addBook('Never Give Up', 'Mohamed Brzan', 'AB123', true, 100);
addBook('Never Give Up', 'Mohamed Brzan', 'AB123', true, 100);
addBook('Data Analysis', 'Ali Fouad', 'BD123', false, 4);
console.log(booksList);
