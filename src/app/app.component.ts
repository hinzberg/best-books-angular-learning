import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Book } from './Classes/Book'
import { Interface } from 'readline';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Best Books';
  tagline = 'Come in and read!'
    
  books = [ new Book("Foundation","Asimov, Isaac", "3-453-07988-4", 450),
            new Book("Rendezvous with Rama", "Clark, Arthur C.", "8-808-40483-2", 310),
            new Book("The dying Earth","Vance, Jack", "1-946-18452-9", 250),
            new Book("Dune","Herbert, Frank", "3-555-74837-5", 650),
            new Book("War of the Worlds", "Wells, H.G.", "1-277-18988-3", 210)
          ] ;

}