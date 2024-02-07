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

class Flyweight {
  sharedState: string;
  constructor(sharedState: string) {
    this.sharedState = sharedState;
  }

  operation(uniqueState: string) {
    console.log(
      `Flyweight: sharedState (${this.sharedState}) and uniqueState (${uniqueState})`
    );
  }
}

class FlyweightFactory {
  flyweights: {};
  constructor() {
    this.flyweights = {};
  }

  getFlyweight(sharedState: string) {
    if (!this.flyweights[sharedState]) {
      this.flyweights[sharedState] = new Flyweight(sharedState);
    }
    return this.flyweights[sharedState];
  }

  getFlyweightCount(): number {
    return Object.keys(this.flyweights).length;
  }
}

const factory = new FlyweightFactory();
const flyweight1 = factory.getFlyweight('sharedState 1');
const flyweight10 = factory.getFlyweight('sharedState 10');
flyweight1.operation('uniqueState 1');
flyweight10.operation('uniqueState 10');


console.log(flyweight1);
console.log(factory.getFlyweightCount());
