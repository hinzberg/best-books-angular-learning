import { Component } from '@angular/core';
import { BookService } from '../../Services/book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-list.component.html',
  styleUrl: './top-list.component.css',
})

export class TopListComponent {
  constructor(public bookservice: BookService) {}
}
