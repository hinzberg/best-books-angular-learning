import { Injectable } from '@angular/core';
import { Book } from './Classes/Book'

@Injectable({
  providedIn: 'root'
})

export class BookService {

  books = [
  new Book("Foundation", "Asimov, Isaac", "3-453-07988-4", 450),
  new Book("Rendezvous with Rama", "Clark, Arthur C.", "8-808-40483-2", 310),
  new Book("The dying Earth", "Vance, Jack", "1-946-18452-9", 250),
  new Book("Dune", "Herbert, Frank", "3-555-74837-5", 650),
  new Book("War of the Worlds", "Wells, H.G.", "1-277-18988-3", 210),
  new Book("The Demolished Man", "Bester, Alfred", "7-483-28911-9", 195),
  new Book("Ender's Game", "Scott Card, Orson", "6-845-18927-6", 195)
  ];

  constructor() { }

  addBook(book:Book) {
    this.books.push(book)
  }
}
