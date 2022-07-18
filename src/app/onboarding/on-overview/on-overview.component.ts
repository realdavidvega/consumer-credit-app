import { Order } from '../../home/order/order';
import { OrderService } from '../../home/order/order.service';
import { OrderToken } from '../../home/order/ordertoken';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-overview',
  templateUrl: './on-overview.component.html',
  styleUrls: ['./on-overview.component.css']
})
export class OnOverviewComponent implements OnInit {
  
  orders: Order[];
  orderToken: OrderToken;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orders = this.orderService.getOrders();
    this.orderService.ordersChanged.subscribe(
      (orders: Order[]) => this.orders = orders
    );
    
    this.orderToken = this.orderService.getOrderToken();
    this.orderService.tokenChanged.subscribe(
      (token: OrderToken) => this.orderToken = token
    );
  }

}
