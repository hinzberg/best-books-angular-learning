import { Component} from '@angular/core';
import { Book } from '../Classes/Book';
import { FormBuilder, FormsModule, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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

  dummy = "xxx"

  onSubmit() {
   
    this.dummy = "Hello World";

  }
}
