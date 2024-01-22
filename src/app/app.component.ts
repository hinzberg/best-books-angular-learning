import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Book } from './Classes/Book'
import { Interface } from 'readline';
import { PageheaderComponent } from './pageheader/pageheader.component';
import { BookTableComponent } from './book-table/book-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BookTableComponent, PageheaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Best Books';
  tagline = 'Come in and read!'
}
