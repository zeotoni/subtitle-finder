import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Search',
    loadComponent: () => import('./features/search/search').then((m) => m.Search),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
