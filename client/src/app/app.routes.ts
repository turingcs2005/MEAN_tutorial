import { Routes } from '@angular/router';
import { Home } from '../app/welcome/home/home';
import { angularRoutes } from './angular/angular.routes';
import { nodeRoutes } from './node/node.routes';
import { developmentEnvironmentRoutes } from './development-environment/developmentEnvironment.routes';
import { toolingRoutes } from './tooling/tooling.routes';
import { Crud } from './services/crud';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'angular', children: angularRoutes },
  { path: 'node', children: nodeRoutes },
  { path: 'development-environment', children: developmentEnvironmentRoutes },
  { path: 'tooling', providers: [Crud], children: toolingRoutes },
];