
import { OrderComponent } from './home/order/order.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'}, //general
  { path: 'home', loadChildren: 'app/home/#HomeModule' },
  { path: 'general', component: OnboardingComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
