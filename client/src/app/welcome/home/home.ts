import { ChangeDetectionStrategy, Component } from '@angular/core';
import { materialModules } from '../../shared/material';
import { toolsModules } from '../../shared/tools';

@Component({
  selector: 'app-home',
  imports: [...materialModules, ...toolsModules],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
}
