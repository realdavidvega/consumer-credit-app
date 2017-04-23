import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { AuthService } from './auth.service';
import { AuthGuard } from './authguard';
import { RegisterComponent } from './home/register/register.component';
import { OrderComponent } from './home/order/order.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { BillingComponent } from './onboarding/billing/billing.component';
import { ShippingComponent } from './onboarding/shipping/shipping.component';
import { AddressComponent } from './onboarding/address/address.component';
import { CardComponent } from './onboarding/billing/card/card.component';
import { OverviewComponent } from './onboarding/overview/overview.component';
import { HeaderComponent } from './header/header.component';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';

import { AuthHttp, AuthConfig } from 'angular2-jwt';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    OnboardingComponent,
    BillingComponent,
    ShippingComponent,
    AddressComponent,
    CardComponent,
    OverviewComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    routing
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions ]
    },
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
