import { Routes } from '@angular/router';

import { routes as sharedRoutes } from './shared/pages/shared.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  ...sharedRoutes
];
