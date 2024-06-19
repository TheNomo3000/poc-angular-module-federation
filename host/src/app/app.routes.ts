import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'mfe1',
    loadComponent: () => import('mfe1/Component').then((c) => c.AppComponent),
    pathMatch: 'full',
  },
];
