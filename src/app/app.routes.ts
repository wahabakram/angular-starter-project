import { Routes } from '@angular/router';

import { routes as sharedRoutes } from './shared/pages/index.routes';
import { routes as featureRoutes } from './feature/index.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  ...featureRoutes,
  // shared route includes wild card route also
  ...sharedRoutes
];
