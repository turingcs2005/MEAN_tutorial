import { ChangeDetectionStrategy, Component } from '@angular/core';
import { toolsModules } from '../../shared/tools';

@Component({
  selector: 'app-vsc-keyboard-shortcuts',
  imports: [...toolsModules],
  templateUrl: './vsc-keyboard-shortcuts.html',
  styleUrl: './vsc-keyboard-shortcuts.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VscKeyboardShortcuts {

}
