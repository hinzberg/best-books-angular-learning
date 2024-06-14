import { Component, Input} from '@angular/core';
import { Book } from '../../Classes/Book';
import { FormBuilder, FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookService } from '../../Services/book.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BookCategories } from '../../Classes/BookCategories';
import { BookCategory } from '../../Classes/BookCategory';
import { log } from 'console';

@Component({
  selector: 'app-book-entry',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './book-entry.component.html',
  styleUrl: './book-entry.component.css',
})
export class BookEntryComponent {
  private selectedBook?: Book = undefined;
  public addButtonText = 'Add Book';

  public categories = BookCategories.categories;

  checkoutForm = new FormGroup<EntryForm>({
    title: new FormControl('ee', [Validators.required]),
    autor: new FormControl('', [Validators.required]),
    isbn: new FormControl('', [Validators.required]),
    pages: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    bookCategory: new FormControl(this.categories[2], [Validators.required]),
  });

  constructor(
    public bookservice: BookService,
    public router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    let id = this.activatedRoute.snapshot.params['bookId'];
    if (id !== undefined) {
      this.selectedBook = bookservice.getById(id);
      if (this.selectedBook !== undefined) {
        this.checkoutForm.controls['autor'].setValue(this.selectedBook.Autor);
        this.checkoutForm.controls['title'].setValue(this.selectedBook.Title);
        this.checkoutForm.controls['isbn'].setValue(this.selectedBook.ISBN);
        this.checkoutForm.controls['pages'].setValue(
          String(this.selectedBook.NumberOfPages)
        );
        this.checkoutForm.controls['price'].setValue(
          String(this.selectedBook.Price)
        );
        this.addButtonText = 'Update';
      }
    }
    //log("hallo word");
  }

  public message: string = '';

  onSubmit() {

    if (this.checkoutForm.valid === false) {
      this.message = 'Form incomplete!';
      return;
    }

    let title = this.checkoutForm.value.title;
    let autor = this.checkoutForm.value.autor;
    let isbn = this.checkoutForm.value.isbn;
    let pages = this.checkoutForm.value.pages;
    let pa = Number(pages!);
    let price = this.checkoutForm.value.price;
    let pr = Number(price!);

    // Lazy Validation. More to add
    if (isNaN(pa) || pages === '' || price === '') {
      this.message = 'Error';
    } else {
      if (this.selectedBook !== undefined) {
        this.selectedBook.Autor = autor!;
        this.selectedBook.Title = title!;
        this.selectedBook.ISBN = isbn!;
        this.selectedBook.NumberOfPages = pa;
        this.selectedBook.Price = pr;
        this.bookservice.addOrUpdate(this.selectedBook);
      } else {
        let book = new Book(title!, autor!, isbn!, pa, pr);
        this.bookservice.addOrUpdate(book);
      }

      this.message = '';
      this.router.navigate(['all-books']);
    }
  }

  cancel() {
    this.router.navigate(['all-books']);
  }
}

interface EntryForm {
  title: FormControl<string | null>;
  autor: FormControl<string | null>;
  isbn: FormControl<string | null>;
  pages: FormControl<string | null>;
  price: FormControl<string | null>;
  bookCategory: FormControl<BookCategory | null>;
}
