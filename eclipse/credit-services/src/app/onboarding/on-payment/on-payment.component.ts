import { OnboardingService } from '../onboarding.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Tarjeta} from "app/onboarding/tarjeta";

@Component({
  selector: 'app-on-payment',
  templateUrl: './on-payment.component.html',
  styleUrls: ['./on-payment.component.css']
})
export class OnPaymentComponent implements OnInit {

  myForm: FormGroup;
  private tarjeta: Tarjeta;
  constructor(private onboardingService: OnboardingService, private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      card1: ['', Validators.required],
      card2: ['', Validators.required],
      card3: ['', Validators.required],
      card4: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required],
      cvv: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  onNext(){
    this.onboardingService.setOnType();
    console.log(this.myForm.value.card1);
  }

  submitForm() {
    let paymentData = this.myForm.value;
    const card: string = paymentData.card1.concat(paymentData.card2, paymentData.card3, paymentData.card4);
    const month: string = paymentData.month;
    const year: string = paymentData.year;
    const cvv: string = paymentData.cvv;
    const name: string = paymentData.name;

    this.tarjeta = { card, month, year, cvv, name };

    this.onboardingService.paymentSubject.next(this.tarjeta);

  }

}

