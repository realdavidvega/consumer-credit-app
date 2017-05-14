import { Component, OnInit } from '@angular/core';
import {OnboardingService} from "../onboarding.service";

@Component({
  selector: 'app-on-ine',
  templateUrl: './on-ine.component.html',
  styleUrls: ['./on-ine.component.css']
})
export class OnIneComponent implements OnInit {

  constructor(private onboardingService: OnboardingService) { }

  ngOnInit() {
  }

  onNext(){
    this.onboardingService.setOnIne();
    this.onboardingService.setOnCalculation();

  }

}
