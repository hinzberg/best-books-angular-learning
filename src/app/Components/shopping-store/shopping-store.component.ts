import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BookService } from '../../Services/book.service';

@Component({
  selector: 'app-shopping-store',
  standalone: true,
  imports: [
    CommonModule, 
  ],
  templateUrl: './shopping-store.component.html',
  styleUrl: './shopping-store.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ShoppingStoreComponent { 

  constructor(public bookservice : BookService ) {

  }
}
