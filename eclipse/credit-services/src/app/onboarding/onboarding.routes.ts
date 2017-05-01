
import { AuthGuard } from '../authguard';
import { OnboardingComponent } from './onboarding.component';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'onboarding', pathMatch: 'full' },
  { path: 'onboarding', component: OnboardingComponent, canActivate: [AuthGuard] },
];

export const onboardingRoutes: ModuleWithProviders = RouterModule.forChild(routes);
