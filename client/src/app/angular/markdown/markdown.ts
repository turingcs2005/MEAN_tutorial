import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-markdown',
  imports: [],
  templateUrl: './markdown.html',
  styleUrl: './markdown.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Markdown {

}
