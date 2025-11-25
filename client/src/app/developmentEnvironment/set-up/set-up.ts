import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { toolsModules } from '../../shared/tools';

@Component({
  selector: 'app-set-up',
  imports: [...toolsModules],
  templateUrl: './set-up.html',
  styleUrl: './set-up.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetUp {

}
