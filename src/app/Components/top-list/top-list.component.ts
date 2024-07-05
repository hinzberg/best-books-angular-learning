// https://accesto.com/blog/drag-and-drop-angular/

import { Component } from '@angular/core';
import { BookService } from '../../Services/book.service';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Book } from '../../Classes/Book';

@Component({
  selector: 'app-top-list',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './top-list.component.html',
  styleUrl: './top-list.component.css',
})
export class TopListComponent {

  constructor(public bookservice: BookService) { }

  drop(event: CdkDragDrop<string[]>) {
    // alert('drop ' + event.previousIndex + ' to ' + event.currentIndex);
    moveItemInArray(
      this.bookservice.topBooks,
      event.previousIndex,
      event.currentIndex
    );
  }
}
