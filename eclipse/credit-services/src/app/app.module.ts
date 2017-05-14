import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/authguard';
import { HeaderComponent } from './header/header.component';
import { HomeModule } from './home/home.module';
import { OrderService } from './home/order/order.service';
import { OnboardingModule } from './onboarding/onboarding.module';
import { OnboardingService } from './onboarding/onboarding.service';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PaymentService} from "./onboarding/payment.service";

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
    AuthModule,
    routing
  ],
  providers: [
    AuthGuard,
    AuthService,
    OrderService,
    OnboardingService,
    PaymentService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
