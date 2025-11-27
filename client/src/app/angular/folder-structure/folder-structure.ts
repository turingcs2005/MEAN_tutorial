import { ChangeDetectionStrategy, Component } from '@angular/core';
import { toolsModules } from '../../shared/tools';

@Component({
  selector: 'app-folder-structure',
  templateUrl: './folder-structure.html',
  imports: [...toolsModules],
  styleUrl: './folder-structure.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FolderStructure {

}
