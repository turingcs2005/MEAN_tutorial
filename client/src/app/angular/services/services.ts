import { ChangeDetectionStrategy, Component } from '@angular/core';
import { toolsModules } from '../../shared/tools';

@Component({
  selector: 'app-services',
  imports: [...toolsModules],
  templateUrl: './services.html',
  styleUrl: './services.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Services {

}
