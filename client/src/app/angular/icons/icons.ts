import { ChangeDetectionStrategy, Component } from '@angular/core';
import { toolsModules } from '../../shared/tools';
import { materialModules } from '../../shared/material';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-icons',
  imports: [...toolsModules, ...materialModules],
  templateUrl: './icons.html',
  styleUrls: ['./icons.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Icons {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'lobster',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/icons/lobster.svg')
    );
  } 

}
