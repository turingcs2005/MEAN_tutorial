import { Routes } from '@angular/router';

export const toolingRoutes: Routes = [
    { path: 'ai-assistance', loadComponent: () => import('./ai-assistance/ai-assistance').then(m => m.AiAssistance) },
    { path: 'nvm', loadComponent: () => import('./nvm/nvm').then(m => m.Nvm) },
    { path: 'vim', loadComponent: () => import('./vim/vim').then(m => m.Vim) },
    { path: 'git', loadComponent: () => import('./git/git').then(m => m.Git) },
];
