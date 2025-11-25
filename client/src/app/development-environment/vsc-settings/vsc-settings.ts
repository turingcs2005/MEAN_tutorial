import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { toolsModules } from '../../shared/tools';

@Component({
  selector: 'app-vsc-settings',
  imports: [...toolsModules],
  templateUrl: './vsc-settings.html',
  styleUrl: './vsc-settings.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VscSettings {

}
