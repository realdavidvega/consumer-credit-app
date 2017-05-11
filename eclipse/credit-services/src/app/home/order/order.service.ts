import { Order } from './order';
import { OrderToken } from './ordertoken';
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class OrderService {
  ordersChanged = new EventEmitter<Order[]>();
  tokenChanged = new EventEmitter<OrderToken>();

  private orders: Order[] = [];

  private order: Order;

  sendedOrder = false;

  private orderToken: OrderToken;

  constructor(private http: Http) { }

  getOrders() {
    return this.orders;
  }

  getOrder(id: number) {
    return this.orders[id];
  }

  async addOrder(order: Order) {
    order = this.calculateTotal(order);
    this.orders.push(order);
    this.createOrderToken();
  }

  calculateTotal(order: Order) {
    order.totalOrder = order.quantOrder * order.priceOrder;
    return order;
  }

  deleteAll() {
    this.orders = [];
    this.ordersChanged.emit(this.orders);
    this.orderToken = {
      order: null,
      subtotal: 0,
      total: 0
    };
    this.tokenChanged.emit(this.orderToken);
  }

  createOrderToken() {
    let subtotal = 0;

    for (let i = 0; i < this.orders.length; i++) {
      subtotal = subtotal + this.orders[i].totalOrder;
    }

    const total = subtotal;

    this.orderToken = {
      order: this.orders,
      subtotal: subtotal,

      total: total
    };

    this.tokenChanged.emit(this.orderToken);

    this.sendedOrder = true;
  }

  getOrderToken() {
    return this.orderToken;
  }

}
