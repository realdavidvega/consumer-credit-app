import { authRoutes } from './auth.routes';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthOverviewComponent } from './auth-overview/auth-overview.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import {OnOverviewComponent} from "../onboarding/on-overview/on-overview.component";

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthOverviewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    authRoutes,
    PopoverModule.forRoot()
  ]
})

export class AuthModule {}
