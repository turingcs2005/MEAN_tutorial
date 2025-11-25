import { ChangeDetectionStrategy, Component } from '@angular/core';
import { toolsModules } from '../../shared/tools';

@Component({
  selector: 'app-ai-assistance',
  imports: [...toolsModules],
  templateUrl: './ai-assistance.html',
  styleUrl: './ai-assistance.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiAssistance {

}
