
import { HomeComponent } from './home.component';
import { OrderComponent } from './order/order.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'order', pathMatch: 'full' },
  { path: 'order', component: OrderComponent}
];

export const homeRoutes: ModuleWithProviders = RouterModule.forChild(routes);
