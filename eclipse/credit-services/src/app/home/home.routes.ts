
import { AuthGuard } from '../authguard';
import { HomeComponent } from './home.component';

import { OrderComponent } from './order/order.component';
import { RegisterComponent } from './register/register.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'order', component: OrderComponent, canActivate: [AuthGuard]}
];

export const homeRoutes: ModuleWithProviders = RouterModule.forChild(routes);
