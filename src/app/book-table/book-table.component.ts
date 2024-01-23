import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../Classes/Book'
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-table',
  standalone: true,
  imports: [CommonModule] ,
  templateUrl: './book-table.component.html',
  styleUrl: './book-table.component.css'
})

export class BookTableComponent {

  constructor(public bookservice : BookService ) {
  }


  showInfo(book : Book) {
    let message: string = book.Title + " by " + book.Autor + ", (" + book.NumberOfPages + " pages)"; 
    alert(message); 
  }
}
