import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { AuthService } from './auth.service';
import { AuthGuard } from './authguard';
import { OrderComponent } from './home/order/order.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { HeaderComponent } from './header/header.component';
import { HomeModule } from './home/home.module';
import { OrderService } from './home/order/order.service';
import { OnboardingModule } from './onboarding/onboarding.module';
import { OnboardingService } from './onboarding/onboarding.service';
import { RouterModule } from '@angular/router';

import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { AngularFireModule } from 'angularfire2';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    OnboardingModule,
    routing
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions ]
    },
    AuthGuard,
    AuthService,
    OrderService,
    OnboardingService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
