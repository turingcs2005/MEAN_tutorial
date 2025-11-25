import { Routes } from '@angular/router';

export const developmentEnvironmentRoutes: Routes = [
    { path: 'set-up', loadComponent: () => import('./set-up/set-up').then(m => m.SetUp) },
    { path: 'vsc-settings', loadComponent: () => import('./vsc-settings/vsc-settings').then(m => m.VscSettings) },
    { path: 'npm', loadComponent: () => import('./npm/npm').then(m => m.Npm) },
];
