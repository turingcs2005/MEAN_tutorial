# Utility modules
___
Use whatever folder/file structure makes sense for your project. I group my utility modules into two files within a single shared directory.
```
│   └── 📁 src
│       └── 📁 app
│           ├── 🟦 app.routes.ts
│           ├── 🟦 app.config.ts
│           └── 📁 shared
│               ├── 🟦 material.ts
│               └── 🟦 tools.ts
```

- material.ts imports and exports material modules
```typescript
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export const materialModules = [
  MatButtonModule,
  MatIconModule,
];
```
- Everything else is housed in tools.ts 
```typescript
import { MarkdownModule } from 'ngx-markdown';

export const toolsModules = [
    MarkdownModule, 
];
```
A component consumes these utility modules in its imports array:
```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { toolsModules } from '../../shared/tools';
import { materialModules } from '../../shared/material';

@Component({
  selector: 'app-best-practices',
  imports: [...toolsModules, ...materialModules],
  templateUrl: './best-practices.html',
  styleUrl: './best-practices.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: []
})
export class BestPractices {}
```
Obviously, if you do not mind writing more code (and with AI assistance, that is not expensive), you may directly import individual modules in your component based on need.