import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../Classes/Book'
import { BookRowComponent } from '../book-row/book-row.component';

@Component({
  selector: 'app-book-table',
  standalone: true,
  imports: [CommonModule , BookRowComponent] ,
  templateUrl: './book-table.component.html',
  styleUrl: './book-table.component.css'
})

export class BookTableComponent {

  @Input() books : Book[] =  [new Book("w","w","w",0)];

}
