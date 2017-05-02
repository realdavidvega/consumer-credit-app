import { Order } from './order';
import { OrderToken } from './ordertoken';
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { AngularFire, AngularFireDatabase } from 'angularfire2';


@Injectable()
export class OrderService {
  ordersChanged = new EventEmitter<Order[]>();
  tokenChanged = new EventEmitter<OrderToken>();

  private orders: Order[] = [];

  private order: Order;

  private orderToken: OrderToken;

  constructor(private http: Http, private af: AngularFire) { }

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
      send: 0,
      subtotal: 0,
      total: 0
    };
    this.tokenChanged.emit(this.orderToken);
  }

  createOrderToken() {
    let subtotal = 0;
    let send = 0;

    for (let i = 0; i < this.orders.length; i++) {
      subtotal = subtotal + this.orders[i].totalOrder;
      send = send + this.orders[i].precioEnvio;
    }

    const total = subtotal + send;

    this.orderToken = {
      order: this.orders,
      subtotal: subtotal,
      send: send,
      total: total
    };

    this.tokenChanged.emit(this.orderToken);
  }

  getOrderToken() {
    return this.orderToken;
  }

}
