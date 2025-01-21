import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home',
    loadComponent: () => import('./home/home.component').then((c) => c.HomeComponent)
  }
];
