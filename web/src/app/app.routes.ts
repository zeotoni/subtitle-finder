import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Search',
    loadComponent: () => import('./features/search/search').then((m) => m.Search),
  },
  {
    path: 'Search',
    loadChildren: () =>
      import('./features/search/search-form/search-form').then((m) => m.SearchForm),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
