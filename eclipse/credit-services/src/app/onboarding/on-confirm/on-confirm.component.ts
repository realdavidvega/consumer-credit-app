import { Component, OnInit } from '@angular/core';
import {OnboardingService} from "../onboarding.service";
import {Tarjeta} from "../tarjeta";
import {OrderToken} from "../../home/order/ordertoken";
import {OrderService} from "../../home/order/order.service";
import {Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-on-confirm',
  templateUrl: './on-confirm.component.html',
  styleUrls: ['./on-confirm.component.css']
})
export class OnConfirmComponent implements OnInit {

  tarjeta: Tarjeta;
  orderToken: OrderToken;

  constructor(private onboardingService: OnboardingService, private orderService: OrderService, private auth: AuthService) { }

  ngOnInit() {
    this.onboardingService.getPayment().subscribe((tarjeta: Tarjeta) => this.tarjeta = tarjeta);

    this.orderToken = this.orderService.getOrderToken();
    this.orderService.tokenChanged.subscribe(
      (token: OrderToken) => this.orderToken = token
    );

  }

  onNext() {
    this.auth.finish();

  }

}
