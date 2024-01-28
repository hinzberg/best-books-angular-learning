import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PageheaderComponent } from './Components/page-header/page-header.component';
import { BookTableComponent } from './Components/book-table/book-table.component';
import { PageFooterComponent } from './Components/page-footer/page-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BookTableComponent, PageheaderComponent , PageFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Best Books';
  tagline = 'Come in and read!'
}
