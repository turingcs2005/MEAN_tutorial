import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Crud } from '../../services/crud';
import { toolsModules } from '../../shared/tools';

@Component({
  selector: 'app-set-up',
  imports: [...toolsModules],
  providers: [Crud],
  templateUrl: './setup.html',
  styleUrl: './setup.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetUp {}
