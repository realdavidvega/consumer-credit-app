import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/authguard';
import { OrderComponent } from './home/order/order.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { HeaderComponent } from './header/header.component';
import { HomeModule } from './home/home.module';
import { OrderService } from './home/order/order.service';
import { OnboardingModule } from './onboarding/onboarding.module';
import { OnboardingService } from './onboarding/onboarding.service';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCheckboxModule, MdInputModule, MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { AngularFireModule } from 'angularfire2';
import 'hammerjs';
import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HomeModule,
    OnboardingModule,
    MaterialModule,
    AuthModule,
    routing
  ],
  providers: [
    AuthGuard,
    AuthService,
    OrderService,
    OnboardingService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
