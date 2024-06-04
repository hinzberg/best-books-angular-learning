import { Component } from '@angular/core';
import { TaggingCell } from '../../Classes/TaggingCell';

@Component({
  selector: 'app-tagging-cell',
  standalone: true,
  imports: [],
  templateUrl: './tagging-cell.component.html',
  styleUrl: './tagging-cell.component.css',
})
export class TaggingCellComponent {
  public cell = new TaggingCell();
  public cellValidationStyle = 'cellValidationIndicatorRed';
}
