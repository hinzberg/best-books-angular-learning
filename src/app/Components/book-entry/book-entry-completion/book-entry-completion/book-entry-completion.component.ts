import {Component, Input} from '@angular/core';
import { Book} from "../../../../Classes/Book";

@Component({
  selector: 'app-book-entry-completion',
  standalone: true,
  imports: [],
  templateUrl: './book-entry-completion.component.html',
  styleUrl: './book-entry-completion.component.css'
})
export class BookEntryCompletionComponent {

  @Input()
  public book: Book = Book.Sample();
}
