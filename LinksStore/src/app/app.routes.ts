import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent)
  },
  {
    path: 'links',
    loadComponent: () => import('./links-preview-setup/links-preview-setup.component').then(mod => mod.LinksPreviewSetupComponent)
  },

];
