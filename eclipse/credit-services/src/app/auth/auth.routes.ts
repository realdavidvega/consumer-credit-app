import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { Routes, RouterModule } from '@angular/router';

const AUTH_ROUTES: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

export const authRoutes = RouterModule.forChild(AUTH_ROUTES);
