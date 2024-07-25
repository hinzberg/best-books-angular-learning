import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../../Services/book.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Book } from '../../Classes/Book';


@Component({
  selector: 'app-books-warehouse',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './books-warehouse.component.html',
  styleUrl: './books-warehouse.component.css',
})
export class BooksWarehouseComponent {
  constructor(public bookservice: BookService) {}

  drop(event: CdkDragDrop<Book[]>) {
    if (event.previousContainer === event.container) {
      // Reorder items within the same list
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      // Move items between lists
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
