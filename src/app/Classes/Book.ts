import { BookCategories } from './BookCategories';
import { BookCategory } from './BookCategory';

export class Book {
  Title: string;
  Autor: string;
  ISBN: string;
  NumberOfPages: number;
  Id: string;
  Price: number;

  Category: BookCategory;

  constructor(
    title: string,
    autor: string,
    isbn: string,
    pages: number,
    price: number
  ) {
    this.Autor = autor;
    this.Title = title;
    this.ISBN = isbn;
    this.NumberOfPages = pages;
    this.Price = price;
    this.Id = this.generateGUID();
    this.Category = BookCategories.first();
  }

  generateGUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
}
