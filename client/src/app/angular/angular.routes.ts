import { Routes } from '@angular/router';

export const angularRoutes: Routes = [
    { path: 'best-practices', loadComponent: () => import('./best-practices/best-practices').then(m => m.BestPractices) },
    { path: 'set-up', loadComponent: () => import('./set-up/set-up').then(m => m.SetUp) },
];
