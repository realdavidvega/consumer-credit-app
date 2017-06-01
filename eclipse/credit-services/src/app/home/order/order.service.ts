import {Order} from './order';
import {OrderToken} from './ordertoken';
import {Injectable, EventEmitter} from '@angular/core';
import {Token} from "./token";
import {Cart} from "./cart";

@Injectable()
export class OrderService {
  ordersChanged = new EventEmitter<Order[]>();
  tokenChanged = new EventEmitter<OrderToken>();

  private orders: Order[] = [];
  sendedOrder = false;
  private orderToken: OrderToken;

  private token: Token;
  private cart: Cart;

  constructor() {
  }

  getOrders() {
    return this.orders;
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

    this.generateToken();
  }

  getOrderToken() {
    return this.orderToken;
  }

  generateToken() {
    this.cart = {
      idCart: 7,
      orders: this.orders
    };

    this.token = {
      idSession: 123,
      idUser: 2,
      idPartner: 4,
      card: this.cart
    };




  }

}
