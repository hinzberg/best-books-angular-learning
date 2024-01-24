import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../Classes/Book'
import { BookService } from '../book.service';
import { RouterModule } from '@angular/router';
import { BookFilterComponent } from '../book-filter/book-filter.component';

@Component({
  selector: 'app-book-table',
  standalone: true,
  imports: [CommonModule, RouterModule, BookFilterComponent] ,
  templateUrl: './book-table.component.html',
  styleUrl: './book-table.component.css'
})

export class BookTableComponent {

  constructor(public bookservice : BookService ) {
  }

  deleteBook(book : Book) {
    this.bookservice.delete(book);
  }
}
