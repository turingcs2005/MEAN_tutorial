# Routing
___
Group your standalone components under different feature directories, and create a FEATURE.route.ts file for each feature directory. Use lazy loading for feature components to enhance app performance.

For example, file tooling.routes.ts:
```typescript
import { Routes } from '@angular/router';

export const toolingRoutes: Routes = [
    { path: 'ai-assistance', loadComponent: () => import('./ai-assistance/ai-assistance').then(m => m.AiAssistance) },
    { path: 'nvm', loadComponent: () => import('./nvm/nvm').then(m => m.Nvm) },
    { path: 'vim', loadComponent: () => import('./vim/vim').then(m => m.Vim) },
    { path: 'git', loadComponent: () => import('./git/git').then(m => m.Git) },
    { path: 'vsc-keyboard-shortcuts', loadComponent: () => import('./vsc-keyboard-shortcuts/vsc-keyboard-shortcuts').then(m => m.VscKeyboardShortcuts) },
];
```
Then import your feature route into your app.routes.ts. You may also provide services at route level.
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
