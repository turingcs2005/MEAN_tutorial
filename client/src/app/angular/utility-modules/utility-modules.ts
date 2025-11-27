import { ChangeDetectionStrategy, Component } from '@angular/core';
import { toolsModules } from '../../shared/tools';

@Component({
  selector: 'app-utility-modules',
  imports: [...toolsModules],
  templateUrl: './utility-modules.html',
  styleUrl: './utility-modules.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UtilityModules {

}
