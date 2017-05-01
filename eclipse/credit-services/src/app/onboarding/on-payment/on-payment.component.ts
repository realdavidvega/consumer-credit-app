import { OnboardingService } from '../onboarding.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-payment',
  templateUrl: './on-payment.component.html',
  styleUrls: ['./on-payment.component.css']
})
export class OnPaymentComponent implements OnInit {

  constructor(private onboardingService: OnboardingService) { }

  ngOnInit() {
  }

  onNext(){
    this.onboardingService.setOnPayment();
    this.onboardingService.setOnPerson();
  }

}

