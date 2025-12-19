import { ChangeDetectionStrategy, Component } from '@angular/core';
import { toolsModules } from '../../shared/tools';

@Component({
  selector: 'app-custom-color-theme',
  imports: [...toolsModules],
  templateUrl: './custom-color-theme.html',
  styleUrl: './custom-color-theme.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomColorTheme {

}
