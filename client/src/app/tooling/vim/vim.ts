import { ChangeDetectionStrategy, Component } from '@angular/core';
import { toolsModules } from '../../shared/tools';

@Component({
  selector: 'app-vim',
  imports: [...toolsModules],
  templateUrl: './vim.html',
  styleUrl: './vim.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Vim {

}
