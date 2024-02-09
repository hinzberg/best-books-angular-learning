import { Component } from '@angular/core';
import { BookService } from '../../Services/book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-shelf',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-shelf.component.html',
  styleUrl: './book-shelf.component.css'
})

export class BookShelfComponent {

  constructor(public bookservice : BookService ) {
  }

}
