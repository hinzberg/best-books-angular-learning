import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-rolldown-panel',
  standalone: true,
  imports: [NgIf],
  templateUrl: './rolldown-panel.component.html',
  styleUrl: './rolldown-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class RolldownPanelComponent {
  @Input()
  public isOpen: boolean = true;

  @Input()
  public header: string = '';

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
