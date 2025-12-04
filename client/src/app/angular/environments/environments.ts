import { ChangeDetectionStrategy, Component } from '@angular/core';
import { toolsModules } from '../../shared/tools';

@Component({
  selector: 'app-environments',
  imports: [...toolsModules],
  templateUrl: './environments.html',
  styleUrl: './environments.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Environments {

}
