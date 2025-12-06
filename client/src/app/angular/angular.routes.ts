import { Routes } from '@angular/router';

export const angularRoutes: Routes = [
    { path: 'set-up', loadComponent: () => import('./set-up/set-up').then(m => m.SetUp) },
    { path: 'folder-structure', loadComponent: () => import('./folder-structure/folder-structure').then(m => m.FolderStructure) },
    { path: 'best-practices', loadComponent: () => import('./best-practices/best-practices').then(m => m.BestPractices) },
    { path: 'markdown', loadComponent: () => import('./markdown/markdown').then(m => m.Markdown) },
    { path: 'routing', loadComponent: () => import('./routing/routing').then(m => m.Routing) },
    { path: 'services', loadComponent: () => import('./services/services').then(m => m.Services) },
    { path: 'utility-modules', loadComponent: () => import('./utility-modules/utility-modules').then(m => m.UtilityModules) },
    { path: 'environments', loadComponent: () => import('./environments/environments').then(m => m.Environments) },
    { path: 'icons', loadComponent: () => import('./icons/icons').then(m => m.Icons) },
];
