
import { Order } from './order';
import { OrderService } from './order.service';
import { OrderToken } from './ordertoken';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormArray, FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { AuthHttp, JwtHelper } from 'angular2-jwt';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {

  orderForm: FormGroup;
  private subscription: Subscription;
  private order: Order;
  orders: Order[];
  orderToken: OrderToken;
  done = false;

  constructor(public router: Router,
    public http: Http,
    public authHttp: AuthHttp,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private orderService: OrderService) {
  }

  async initialOrders() {
    const newOrder = {
      idOrder: 1,
      quantOrder: 1,
      nameOrder: 'iPhone 7',
      imageOrder: 'null',
      priceOrder: 900,
      totalOrder: null,
      precioEnvio: 5

    };

    const newOrder2 = {
      idOrder: 1,
      quantOrder: 2,
      nameOrder: 'MacBook Pro 15"',
      imageOrder: 'null',
      priceOrder: 900,
      totalOrder: null,
      precioEnvio: 5

    };

    this.orderService.addOrder(newOrder);
    this.orderService.addOrder(newOrder2);

  }

  ngOnInit() {

    this.initialOrders();
    this.initForm();

    this.orders = this.orderService.getOrders();
    this.orderService.ordersChanged.subscribe(
      (orders: Order[]) => this.orders = orders
    );

    this.orderToken = this.orderService.getOrderToken();
    this.orderService.tokenChanged.subscribe(
      (token: OrderToken) => this.orderToken = token
    );

  }

  onSubmit() {
    const newOrder = this.orderForm.value;

    this.orderService.addOrder(newOrder);
    this.done = true;

  }

  onSendToken() {
    this.router.navigate(['/onboarding']);
  }

  onClear() {
    this.initForm();
  }

  private initForm() {
   const idOrder = '';
    const quantOrder = '';
    const nameOrder = '';
    const imageOrder = '';
    const priceOrder = '';
    const precioEnvio = '';

    this.orderForm = this.formBuilder.group({
      idOrder: [idOrder, Validators.required],
      quantOrder: [quantOrder, Validators.required],
      nameOrder: [nameOrder, Validators.required],
      imageOrder: [imageOrder, Validators.required],
      priceOrder: [priceOrder, Validators.required],
      precioEnvio: [precioEnvio,  Validators.required]
    });
  }

  getOrder() {
    return this.order;
  }

  deleteOrders() {
    this.orderService.deleteAll();
  }

}

