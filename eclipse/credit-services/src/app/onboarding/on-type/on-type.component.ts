import { OnboardingService } from '../onboarding.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-type',
  templateUrl: './on-type.component.html',
  styleUrls: ['./on-type.component.css']
})
export class OnTypeComponent implements OnInit {

  constructor(private onboardingService: OnboardingService) { }

  ngOnInit() {
  }

  onBack() {
    this.onboardingService.setOnType();
  }
  
  onNext(){
    this.onboardingService.setOnPayment();
    this.onboardingService.setOnSignature();
  }


}
