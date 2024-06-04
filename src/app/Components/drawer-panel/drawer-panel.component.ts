import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-drawer-panel',
  standalone: true,
  imports: [NgIf],
  templateUrl: './drawer-panel.component.html',
  styleUrl: './drawer-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DrawerPanelComponent {
  @Input()
  public isOpen: boolean = true;

  @Input()
  public header: string = '';

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
