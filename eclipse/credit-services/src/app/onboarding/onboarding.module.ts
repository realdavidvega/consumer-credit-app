import { AuthModule } from '../auth/auth.module';
import { OnboardingComponent } from './onboarding.component';
import { onboardingRoutes } from './onboarding.routes';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OnPersonComponent } from './on-person/on-person.component';
import { OnPaymentComponent } from './on-payment/on-payment.component';
import { OnContactComponent } from './on-contact/on-contact.component';
import { OnCalculationComponent } from './on-calculation/on-calculation.component';
import { OnSignatureComponent } from './on-signature/on-signature.component';
import { OnFinishComponent } from './on-finish/on-finish.component';
import { OnStartComponent } from './on-start/on-start.component';
import { OnOverviewComponent } from './on-overview/on-overview.component';
import { OnPersonCardComponent } from './on-person/on-person-card/on-person-card.component';
import { OnTypeComponent } from './on-type/on-type.component';
import { CommonModule } from '@angular/common';
import { OnIneComponent } from './on-ine/on-ine.component';
import {PdfViewerComponent} from "ng2-pdf-viewer";
import { OnConfirmComponent } from './on-confirm/on-confirm.component';
import { AlertModule } from "ngx-bootstrap";
import {MdSliderModule} from "@angular/material";
import { OnCancelComponent } from './on-cancel/on-cancel.component';

@NgModule({
  declarations: [
    OnboardingComponent,
    OnPersonComponent,
    OnPaymentComponent,
    OnContactComponent,
    OnCalculationComponent,
    OnSignatureComponent,
    OnFinishComponent,
    OnStartComponent,
    OnOverviewComponent,
    OnPersonCardComponent,
    OnTypeComponent,
    OnIneComponent,
    PdfViewerComponent,
    OnConfirmComponent
  ], exports: [OnOverviewComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    onboardingRoutes,
    AuthModule,
    AlertModule.forRoot(),
    MdSliderModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class OnboardingModule {}
