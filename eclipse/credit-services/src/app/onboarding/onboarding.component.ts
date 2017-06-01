
import { OnboardingService } from './onboarding.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import {OrderToken} from "../home/order/ordertoken";
import {OrderService} from "../home/order/order.service";

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {

  public myWidth = 0;
  public activations;
  public registered = false;
  orderToken: OrderToken;
  constructor(private onboardingService: OnboardingService, private orderService: OrderService) { }

  ngOnInit() {

    this.orderToken = this.orderService.getOrderToken();
    this.orderService.tokenChanged.subscribe(
      (token: OrderToken) => this.orderToken = token
    );

    this.activations = this.onboardingService.getActivation();

    if(this.activations.onPerson) {
      this.myWidth = 20;
    }
    if (this.activations.onPayment) {
      this.myWidth = 40;
    }
    if (this.activations.onType) {
      this.myWidth = 50;
    }
    if (this.activations.onCalculation) {
      this.myWidth = 70;
    }
    if (this.activations.onIne) {
      this.myWidth = 80;
    }
    if (this.activations.onConfirm) {
      this.myWidth = 90;
    }
    if(this.activations.onFinish) {
      this.myWidth = 100;
    }

    this.onboardingService.getActivations().subscribe((data) => {
      this.activations = data;

      if(this.activations.onPerson) {
        this.myWidth = 20;
      }
      if (this.activations.onPayment) {
        this.myWidth = 40;
      }
      if (this.activations.onType) {
        this.myWidth = 50;
      }
      if (this.activations.onCalculation) {
        this.myWidth = 70;
      }
      if (this.activations.onIne) {
        this.myWidth = 80;
      }
      if (this.activations.onConfirm) {
        this.myWidth = 90;
      }
      if(this.activations.onFinish) {
        this.myWidth = 100;
      }
    });

    const cond = {
      token: this.orderToken.subtotal,
      startDate: new Date(),
      condiciones: 0,
      value: 1
    }

    this.onboardingService.getType().subscribe((data: any) => {
      if(data.type === 'credito'){
        this.onboardingService.condSubject.next(cond);
        this.onboardingService.setOnConfirm();
      } else if(data.type === 'aplazado'){
        this.onboardingService.setOnCalculation();
      }
      this.onboardingService.setOnPayment();
    });

    this.alertTimeout();
  }

  alertTimeout() {
    setTimeout(() => {
      this.registered = true;
    }, 3000);
  }


}
