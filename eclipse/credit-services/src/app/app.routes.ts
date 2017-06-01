
import { AuthGuard } from './auth/authguard';
import { OrderComponent } from './home/order/order.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OnCancelComponent} from "./onboarding/on-cancel/on-cancel.component";
import {OnFinishComponent} from "./onboarding/on-finish/on-finish.component";

export const routes: Routes = [
  { path: '', redirectTo: 'order', pathMatch: 'full'}, //general
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'onboarding', loadChildren: './onboarding/onboarding.module#OnboardingModule', canActivate: [AuthGuard] },
  { path: 'cancel', component: OnCancelComponent },
  { path: 'finish', component: OnFinishComponent },
  { path: '**', redirectTo: 'order'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
