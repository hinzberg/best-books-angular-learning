import { Component } from '@angular/core';
import { DrawerPanelComponent } from '../drawer-panel/drawer-panel.component';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [DrawerPanelComponent],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.css',
})
export class PlaygroundComponent {}
