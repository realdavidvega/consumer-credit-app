import {Component, Input, OnInit} from '@angular/core';
import {Order} from "../../home/order/order";
import {OrderToken} from "../../home/order/ordertoken";
import {OrderService} from "../../home/order/order.service";
import {OnboardingService} from "../onboarding.service";

@Component({
  selector: 'app-on-calculation',
  templateUrl: './on-calculation.component.html',
  styleUrls: ['./on-calculation.component.css']
})
export class OnCalculationComponent implements OnInit {
  orders: Order[];
  orderToken: OrderToken;
  @Input() value = 1;
  @Input() condiciones = 1;
  @Input() startDate = new Date();
  currentDate = new Date();
  mes: string;
  cuotaMes: string;

  constructor(private orderService: OrderService, private onboardingService: OnboardingService) {
  }

  async ngOnInit() {
    this.orderToken = await this.orderService.getOrderToken();
    await this.orderService.tokenChanged.subscribe(
      (token: OrderToken) => this.orderToken = token
    );

    this.condiciones = this.orderToken.subtotal;
    this.startDate.setMonth(this.startDate.getMonth() + 1);
    const token = this.orderToken.subtotal;

    const startDate = this.startDate;
    const condiciones = this.condiciones;
    const value = this.value;

    const cond = {
      token,
      startDate,
      condiciones,
      value
    };

    if(this.value == 1){
      this.mes = 'mes';
      this.cuotaMes = '';
    } else {
      this.mes = 'meses';
      this.cuotaMes = '/ mes';
    }

    this.onboardingService.condSubject.next(cond);

  }

  calcularCondiciones() {
    const token = this.orderToken.subtotal;

    this.condiciones = (token / this.value) + (token / this.value) * 0.0595;

    this.startDate = new Date(this.startDate.setFullYear(this.currentDate.getFullYear(), this.currentDate.getMonth() + this.value));

    const startDate = this.startDate;
    const condiciones = this.condiciones;
    const value = this.value;

    const cond = {
      token,
      startDate,
      condiciones,
      value
    };

    if(this.value == 1){
      this.mes = 'mes';
      this.cuotaMes = '';
    } else {
      this.mes = 'meses';
      this.cuotaMes = '/ mes';
    }

    this.onboardingService.condSubject.next(cond);
  }

  onNext() {
    this.onboardingService.setOnCalculation();
    this.onboardingService.setOnIne();
    this.onboardingService.setOnSignature();
  }


}
