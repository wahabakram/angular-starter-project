import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'internal-server-error',
    title: 'Internal Server Error',
    loadComponent: () =>
      import('./errors/internal-server/internal-server.component').then((c) => c.InternalServerComponent)
  },
  {
    path: 'forbidden',
    title: 'Forbidden',
    loadComponent: () => import('./errors/forbidden/forbidden.component').then((c) => c.ForbiddenComponent)
  },
  {
    path: '**',
    title: 'Page Not Found',
    loadComponent: () => import('./errors/not-found/not-found.component').then((c) => c.NotFoundComponent)
  }
];
