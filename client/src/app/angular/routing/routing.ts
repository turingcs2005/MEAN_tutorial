import { ChangeDetectionStrategy, Component } from '@angular/core';
import { toolsModules } from '../../shared/tools';

@Component({
  selector: 'app-routing',
  imports: [...toolsModules],
  templateUrl: './routing.html',
  styleUrl: './routing.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Routing {

}
