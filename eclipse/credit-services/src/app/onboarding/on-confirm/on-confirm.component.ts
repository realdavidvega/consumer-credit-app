import { Component, OnInit } from '@angular/core';
import {OnboardingService} from "../onboarding.service";
import {Tarjeta} from "../tarjeta";
import {OrderToken} from "../../home/order/ordertoken";
import {OrderService} from "../../home/order/order.service";

@Component({
  selector: 'app-on-confirm',
  templateUrl: './on-confirm.component.html',
  styleUrls: ['./on-confirm.component.css']
})
export class OnConfirmComponent implements OnInit {

  tarjeta: Tarjeta;
  orderToken: OrderToken;

  constructor(private onboardingService: OnboardingService, private orderService: OrderService) { }

  ngOnInit() {
    this.onboardingService.getPayment().subscribe((tarjeta: Tarjeta) => this.tarjeta = tarjeta);

    this.orderToken = this.orderService.getOrderToken();
    this.orderService.tokenChanged.subscribe(
      (token: OrderToken) => this.orderToken = token
    );

  }

}
