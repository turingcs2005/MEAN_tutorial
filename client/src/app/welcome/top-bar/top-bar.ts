import { ChangeDetectionStrategy, Component } from '@angular/core';
import { materialModules } from '../../shared/material';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-top-bar',
  imports: [...materialModules, RouterLink],
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBar {

}
