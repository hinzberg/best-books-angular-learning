import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-filter',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './book-filter.component.html',
  styleUrl: './book-filter.component.css'
})
export class BookFilterComponent {

  filterText = new FormControl('');

  checkoutForm = new FormGroup({
    filterText: this.filterText,
  });

  constructor(public bookservice: BookService) {

  }

  onSubmit() {
    let text = this.checkoutForm.value.filterText;
    if (text !== undefined) {
      this.bookservice.filter(text!);
    }
  }

  cancel() {
    this.bookservice.filter("");
    this.filterText.setValue("");
  }
}
