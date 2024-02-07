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
