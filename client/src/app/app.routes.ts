import { Routes } from '@angular/router';
import { Home } from '../app/welcome/home/home';
import { angularRoutes } from './angular/angular.routes';
import { developmentEnvironmentRoutes } from './development-environment/developmentEnvironment.routes';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'angular', children: angularRoutes },
  { path: 'development-environment', children: developmentEnvironmentRoutes },
];