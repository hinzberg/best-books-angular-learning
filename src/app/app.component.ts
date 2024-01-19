import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
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
  books: Book[] = [
    {Title:"Foundation", Autor: "Asimov, Isaac"},
    {Title: "Rendezvous with Rama", Autor: "Clark, Arthur C."},
    {Title: "The dying Earth", Autor: "Vance, Jack"},
    {Title: "John Carter of Mars", Autor: "Burroughs, E.R."},
    {Title: "Dune", Autor: "Herbert, Frank"},
    {Title: "War of the Worlds", Autor: "Wells, H.G."}
  ];
}

export interface Book {
  Title: string;
  Autor: string;
}