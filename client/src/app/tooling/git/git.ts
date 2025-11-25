import { ChangeDetectionStrategy, Component } from '@angular/core';
import { toolsModules } from '../../shared/tools';

@Component({
  selector: 'app-git',
  imports: [...toolsModules],
  templateUrl: './git.html',
  styleUrl: './git.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Git {

}
