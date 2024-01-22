import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../Classes/Book'

@Component({
  selector: 'app-book-table',
  standalone: true,
  imports: [CommonModule] ,
  templateUrl: './book-table.component.html',
  styleUrl: './book-table.component.css'
})

export class BookTableComponent {
  books = [ new Book("Foundation","Asimov, Isaac", "3-453-07988-4", 450),
  new Book("Rendezvous with Rama", "Clark, Arthur C.", "8-808-40483-2", 310),
  new Book("The dying Earth","Vance, Jack", "1-946-18452-9", 250),
  new Book("Dune","Herbert, Frank", "3-555-74837-5", 650),
  new Book("War of the Worlds", "Wells, H.G.", "1-277-18988-3", 210),
  new Book("The Demolished Man", "Bester, Alfred", "7-483-28911-9", 195)
  ];

  showInfo(book : Book) {
    let message: string = book.Title + " by " + book.Autor + ", (" + book.NumberOfPages + " pages)"; 
    alert(message); 
  }
}
