import { Routes } from '@angular/router';
import { SetUp } from './set-up/set-up';

export const developmentEnvironmentRoutes: Routes = [
    { path: 'set-up', loadComponent: () => import('./set-up/set-up').then(m => m.SetUp) },
];
