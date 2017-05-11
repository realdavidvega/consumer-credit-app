import { OrderService } from '../../home/order/order.service';
import { OrderToken } from '../../home/order/ordertoken';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-overview',
  templateUrl: './auth-overview.component.html',
  styleUrls: ['./auth-overview.component.css']
})
export class AuthOverviewComponent implements OnInit {

  orderToken: OrderToken;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderToken = this.orderService.getOrderToken();
  }

}
