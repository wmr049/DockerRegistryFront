import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'front-end', pathMatch: 'full' },
  { path: '**', redirectTo: 'front-end' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
