# Services
___
- For global services accessible anywhere in your app, provide via app.config.ts file
```typescript
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideMarkdown } from 'ngx-markdown';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideMarkdown()
  ]
};
```
- For feature-specific services, create your service files and consume them in app.routes.ts
```typescript
import { Routes } from '@angular/router';
import { Home } from '../app/welcome/home/home';
import { toolingRoutes } from './tooling/tooling.routes';
import { Crud } from './services/crud';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'tooling', providers: [Crud], children: toolingRoutes },
];
```
- For component-specific services, use your component's providers array.
```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Crud } from '../../services/crud';

@Component({
  selector: 'app-set-up',
  providers: [Crud],
  templateUrl: './set-up.html',
  styleUrl: './set-up.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetUp {}

```