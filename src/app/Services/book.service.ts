import { Injectable } from '@angular/core';
import { Book } from '../Classes/Book'

@Injectable({
  providedIn: 'root',
})
export class BookService {

  books = [
    new Book('Foundation', 'Asimov, Isaac', '3-453-07988-4', 450, 29.99),
    new Book('Rendezvous with Rama','Clark, Arthur C.','8-808-40483-2',310,9.49),
    new Book('The dying Earth', 'Vance, Jack', '1-946-18452-9', 250, 9.88),
    new Book('Dune', 'Herbert, Frank', '3-555-74837-5', 650, 14.99),
    new Book('War of the Worlds', 'Wells, H.G.', '1-277-18988-3', 210, 6.5),
    new Book('The Demolished Man', 'Bester, Alfred', '7-483-28911-9', 195, 6.8),
    new Book("Ender's Game", 'Scott Card, Orson', '6-845-18927-6', 195, 12.5),
    new Book("Fahrenheit 451", "Bradbury, Ray", "2-227-48372-4", 225, 9.99),
    new Book("The Hitchhiker's Guide", "Adams, Douglas", "4-828-54324-4", 295, 9.75),
    new Book("Hyperion", "Simmons, Dan", "1-123-99573-3", 295, 12.99)
  ];

  filterdBooks = this.books;

  topBooks = this.books;

  isFiltered: boolean = false;

  booksInStock : Book[] = []; 
  booksToReorder : Book[] = [];

  constructor() {

    // Copy all books to the warehouse array to avoid references
    this.books.forEach((val) => this.booksInStock.push(Object.assign({}, val)));

  }

  add(book: Book) {
    this.books.push(book);
  }

  addOrUpdate(book: Book) {
    let index = this.books.findIndex((d) => d.Id === book.Id);
    if (index === -1) {
      // alert("This is a new book!");
      this.books.push(book);
    } else {
      // Update at index
      // alert("This is a known book!");
      this.books[index].Autor = book.Autor;
      this.books[index].Title = book.Title;
      this.books[index].ISBN = book.ISBN;
      this.books[index].NumberOfPages = book.NumberOfPages;
    }
  }

  delete(book: Book) {
    let index = this.books.findIndex((d) => d.Id === book.Id); //find index in your array
    if (index != -1) {
      this.books.splice(index, 1);
    }
  }

  getById(id: string): Book {
    let b = this.books.filter((i) => i.Id === id)[0];
    return b;
  }

  filter(text: string) {
    if (text === '') {
      this.isFiltered = false;
      this.filterdBooks = this.books;
    } else {
      this.filterdBooks = [];
      this.isFiltered = true;
      this.books.forEach((book) => {
        let lowerText = text.toLowerCase();

        if (book.Title.toLowerCase().includes(lowerText)) {
          this.filterdBooks.push(book);
        } else if (book.Autor.toLowerCase().includes(lowerText)) {
          this.filterdBooks.push(book);
        } else if (book.ISBN.toLowerCase().includes(lowerText)) {
          this.filterdBooks.push(book);
        }
      });
    }
  }
}
