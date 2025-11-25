import { ChangeDetectionStrategy, Component } from '@angular/core';
import { materialModules } from '../../shared/material';
import { toolsModules } from '../../shared/tools';
import { provideMarkdown } from 'ngx-markdown';

@Component({
  selector: 'app-home',
  imports: [...materialModules, ...toolsModules],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideMarkdown()]
})
export class Home {
}
