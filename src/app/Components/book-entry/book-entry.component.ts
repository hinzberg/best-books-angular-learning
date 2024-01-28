import { Component, Input} from '@angular/core';
import { Book } from '../../Classes/Book';
import { FormBuilder, FormsModule, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookService } from '../../Services/book.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-entry',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './book-entry.component.html',
  styleUrl: './book-entry.component.css'
})

export class BookEntryComponent {

    private selectedBook? : Book = undefined
    public addButtonText = "Add Book";

    title = new FormControl('');
    autor = new FormControl('');
    isbn = new FormControl('');
    pages = new FormControl('');

    checkoutForm = new FormGroup({
      title : this.title, 
      autor : this.autor, 
      isbn : this.isbn, 
      pages : this.pages
  });

  constructor(public bookservice : BookService , public router : Router, private activatedRoute : ActivatedRoute) {

    let id = this.activatedRoute.snapshot.params['bookId'];
    if (id !== undefined) {
      this.selectedBook = bookservice.getById(id);
      if (this.selectedBook !== undefined) {
        this.title.setValue(this.selectedBook.Title);
        this.autor.setValue(this.selectedBook.Autor);
        this.isbn.setValue(this.selectedBook.ISBN);
        this.pages.setValue(String(this.selectedBook.NumberOfPages));
        this.addButtonText = "Update";
      }
    }  
  }

  dummy = ""

  onSubmit() {
    let title = this.checkoutForm.value.title;
    let autor = this.checkoutForm.value.autor;
    let isbn = this.checkoutForm.value.isbn;
    let pages = this.checkoutForm.value.pages;
    let pa = Number(pages!)

    // Lazy Validation. More to add
    if(isNaN(pa) || pages === "" )
    {
      this.dummy = "Error";
    }
    else
    {
      if (this.selectedBook !== undefined) {
        this.selectedBook.Autor = autor!;
        this.selectedBook.Title = title!;
        this.selectedBook.ISBN = isbn!;
        this.selectedBook.NumberOfPages = pa;
        this.bookservice.addOrUpdate(this.selectedBook);
      } else {
        let book = new Book(title!, autor!, isbn!, pa);
        this.bookservice.addOrUpdate(book);
      }

      this.dummy = "Saved";
      this.router.navigate(['']);
    }
  }

  cancel() {
    this.router.navigate(['']);
}
}
