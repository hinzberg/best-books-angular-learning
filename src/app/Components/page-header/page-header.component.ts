import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.css'
})

export class PageheaderComponent {
  title = 'Best Books';
  tagline = 'Come in and read!'
}
