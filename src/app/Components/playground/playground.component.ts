import { Component } from '@angular/core';
import { DrawerPanelComponent } from '../drawer-panel/drawer-panel.component';
import { RolldownPanelComponent } from '../rolldown-panel/rolldown-panel.component';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [DrawerPanelComponent, RolldownPanelComponent],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.css',
})
export class PlaygroundComponent {}
