import { Injectable } from '@angular/core';
import { Book } from '../Classes/Book';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {

  books : Book[] = [];
  constructor() {}

  add(book: Book) {
    this.books.push(book);
  }
}
