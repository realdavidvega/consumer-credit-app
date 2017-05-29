
import { OnboardingService } from './onboarding.service';
import { Component, OnInit, OnChanges } from '@angular/core';


@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {

  public myWidth = 0;
  public activations;
  public registered = false;
  constructor(private onboardingService: OnboardingService) { }

  ngOnInit() {

    this.activations = this.onboardingService.getActivation();

    if(this.activations.onPerson) {
      this.myWidth = 10;
    } else if (this.activations.onPayment) {
      this.myWidth = 30;
    }

    this.onboardingService.getActivations().subscribe((data) => {
      this.activations = data;

      if(this.activations.onPerson) {
        this.myWidth = 10;
      } else if (this.activations.onPayment) {
        this.myWidth = 30;
      } else if (this.activations.onType) {
        this.myWidth = 50;
      } else if (this.activations.onIne) {
        this.myWidth = 60;
      } else if (this.activations.onCalculation) {
        this.myWidth = 80;
      } else if (this.activations.onConfirm) {
        this.myWidth = 100;
      }
    });

    this.onboardingService.getType().subscribe((data: any) => {
      if(data.type === 'credito'){
        this.onboardingService.setOnCalculation();
      } else if(data.type === 'aplazado'){
        this.onboardingService.setOnIne();
      }
      this.onboardingService.setOnPayment();
    });

    //this.alertTimeout();
  }

  /*
  alertTimeout() {
    setTimeout(() => {
      this.registered = true;
    }, 3000);
  }
  */

}
