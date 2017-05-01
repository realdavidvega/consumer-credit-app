import { OnboardingService } from '../onboarding.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-person',
  templateUrl: './on-person.component.html',
  styleUrls: ['./on-person.component.css']
})
export class OnPersonComponent implements OnInit {

  constructor(private onboardingService: OnboardingService) { }

  ngOnInit() {
  }

  onNext(){
    this.onboardingService.setOnPerson();
    this.onboardingService.setOnSignature();
  }
  
  onBack(){
    this.onboardingService.setOnPerson();
    this.onboardingService.setOnPayment();
  }
  
}
