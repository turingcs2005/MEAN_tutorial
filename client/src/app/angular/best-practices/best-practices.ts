import { ChangeDetectionStrategy, Component } from '@angular/core';
import { toolsModules } from '../../shared/tools';
import { materialModules } from '../../shared/material';

@Component({
  selector: 'app-best-practices',
  imports: [...toolsModules, ...materialModules],
  templateUrl: './best-practices.html',
  styleUrl: './best-practices.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [

  ]
})
export class BestPractices {

}
