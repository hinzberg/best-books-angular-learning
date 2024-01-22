import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pageheader',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './pageheader.component.html',
  styleUrl: './pageheader.component.css'
})

export class PageheaderComponent {
  title = 'Best Books';
  tagline = 'Come in and read!'
}
