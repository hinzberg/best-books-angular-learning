import { Component, Input } from '@angular/core';
import { Book } from '../Classes/Book';

@Component({
  selector: 'app-book-row',
  standalone: true,
  imports: [],
  templateUrl: './book-row.component.html',
  styleUrl: './book-row.component.css'
})

export class BookRowComponent {
  @Input() book : Book = new Book("","","",0);

  showInfo() {
    let message: string = this.book.Title + " by " + this.book.Autor + ", (" + this.book.NumberOfPages + " pages)"; 
    alert(message); 
  }
}


