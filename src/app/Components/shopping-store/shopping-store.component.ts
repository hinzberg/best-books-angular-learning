import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BookService } from '../../Services/book.service';
import { Book } from '../../Classes/Book';
import { ShoppingService } from '../../Services/shopping.service';

@Component({
  selector: 'app-shopping-store',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-store.component.html',
  styleUrl: './shopping-store.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingStoreComponent {
  constructor(
    public bookservice: BookService,
    public shoppingservice: ShoppingService
  ) {}

  addToCart(book: Book) {
    // alert(`Added to cart\n${book.Title} by ${book.Autor}`);
    this.shoppingservice.add(book);
  }
}
