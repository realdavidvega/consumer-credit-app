import { OnboardingService } from '../onboarding.service';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-on-person',
  templateUrl: './on-person.component.html',
  styleUrls: ['./on-person.component.css']
})
export class OnPersonComponent implements OnInit {

  constructor(private onboardingService: OnboardingService, private router: Router) { }

  ngOnInit() {
  }

  onAccept(){
    this.onboardingService.setOnPerson();
    this.onboardingService.setOnPayment();
    this.onboardingService.setOnPersonCard();
  }

  onCancel(){
    this.onboardingService.setOnPerson();
    this.router.navigate(['/login']);
  }

}
