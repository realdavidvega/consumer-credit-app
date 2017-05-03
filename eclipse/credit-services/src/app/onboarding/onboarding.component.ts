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

  public activations;
  
  constructor(private orderService: OrderService, private onboardingService: OnboardingService) { }

  ngOnInit() {
    
    this.activations = this.onboardingService.getActivation();

    this.onboardingService.getActivations().subscribe((data) => {
      this.activations = data;
    });
  }

}
