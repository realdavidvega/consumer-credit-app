import { Order } from './order';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {

  private order: Order;

  constructor() { }

  getOrder() {
    return this.order;
  }

  setOrder(order: Order) {
    return this.order = order;
  }


}
