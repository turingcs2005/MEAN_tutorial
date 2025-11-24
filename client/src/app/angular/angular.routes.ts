import { Routes } from '@angular/router';
import { BestPractices } from './best-practices/best-practices';
import { SetUp } from './set-up/set-up';

export const angularRoutes: Routes = [
    { path: 'best-practices', component: BestPractices },
    { path: 'set-up', component: SetUp },
];
