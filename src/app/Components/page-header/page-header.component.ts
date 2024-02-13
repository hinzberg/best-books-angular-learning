import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShoppingService } from '../../Services/shopping.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [RouterModule , CommonModule],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.css',
})
export class PageheaderComponent {
  title = 'Best Books';
  tagline = 'Come in and read!';

  constructor(public shoppingservice: ShoppingService) {}
}
