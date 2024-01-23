import { Component} from '@angular/core';
import { Book } from '../Classes/Book';
import { FormBuilder, FormsModule, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-entry',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './book-entry.component.html',
  styleUrl: './book-entry.component.css'
})


export class BookEntryComponent {

    checkoutForm = new FormGroup({
    title : new FormControl(''),
    autor : new FormControl(''),
    isbn : new FormControl(''),
    pages : new FormControl('')
  });


  constructor(public bookservice : BookService , public router : Router) {
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
      let book = new Book(title!, autor!, isbn!, pa);
      this.bookservice.addBook(book);
      this.dummy = "Saved";
      this.router.navigate(['']);
    }
  }

  cancel() {
    this.router.navigate(['']);
}
}
