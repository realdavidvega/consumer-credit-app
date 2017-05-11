import { authRoutes } from './auth.routes';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthOverviewComponent } from './auth-overview/auth-overview.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthOverviewComponent
  ],
  exports: [AuthOverviewComponent],
  
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    authRoutes
  ]
})

export class AuthModule {}
