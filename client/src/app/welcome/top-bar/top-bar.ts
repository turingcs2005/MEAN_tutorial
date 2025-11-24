import { ChangeDetectionStrategy, Component } from '@angular/core';
import { materialModules } from '../../shared/material';

@Component({
  selector: 'app-top-bar',
  imports: [...materialModules],
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBar {

}
