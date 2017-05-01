import { Order } from '../home/order/order';
import { OrderService } from '../home/order/order.service';
import { OnboardingService } from './onboarding.service';
import { Component, OnInit, OnChanges } from '@angular/core';


@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {

  private order: Order;

  public activations = {
    onStart: false,
    onPayment: false,
    onPerson: false,
    onSignature: false,
    onContact: false,
    onCalculation: false,
    onOverview: false,
    onType: false,
    onFinish: false
  };
  
  constructor(private orderService: OrderService, private onboardingService: OnboardingService) { }

  ngOnInit() {
    this.order = this.orderService.getOrder();
    this.onboardingService.getActivations().subscribe((data) => {
      this.activations = data;
    });
  }

}
