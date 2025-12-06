import { Routes } from '@angular/router';

export const nodeRoutes: Routes = [
    { path: 'setup', loadComponent: () => import('./setup/setup').then(m => m.SetUp) },
];
