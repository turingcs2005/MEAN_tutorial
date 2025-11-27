import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MarkdownComponent } from "ngx-markdown";

@Component({
  selector: 'app-set-up',
  imports: [MarkdownComponent],
  templateUrl: './set-up.html',
  styleUrl: './set-up.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetUp {

}
