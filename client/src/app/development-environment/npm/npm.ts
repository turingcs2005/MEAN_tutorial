import { ChangeDetectionStrategy, Component } from '@angular/core';
import { toolsModules } from '../../shared/tools';

@Component({
  selector: 'app-npm',
  imports: [...toolsModules],
  templateUrl: './npm.html',
  styleUrl: './npm.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Npm {

}
