import { ChangeDetectionStrategy, Component } from '@angular/core';
import { materialModules } from '../../shared/material';

@Component({
  selector: 'app-home',
  imports: [...materialModules],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {

}
