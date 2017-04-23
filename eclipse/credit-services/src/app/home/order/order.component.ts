
import { Order } from './order';
import { OrderService } from './order.service';
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
  private order: Order;


  constructor(public router: Router,
    public http: Http,
    public authHttp: AuthHttp,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private orderService: OrderService) {
  }

 ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    const newOrder = this.orderForm.value;
    this.order = newOrder;
  }

  onClear() {
    const idOrder = '';
    const nameOrder = '';
    const imageOrder = '';
    const priceOrder = '';

    this.orderForm = this.formBuilder.group({
      idOrder: [idOrder, Validators.required],
      nameOrder: [nameOrder, Validators.required],
      imageOrder: [imageOrder, Validators.required],
      priceOrder: [priceOrder, Validators.required]
    });
  }

  private initForm() {
    const idOrder = 1;
    const nameOrder = 'Samsung SyncMaster P2370HD';
    const imageOrder = 'null';
    const priceOrder = 200;

    this.orderForm = this.formBuilder.group({
      idOrder: [idOrder, Validators.required],
      nameOrder: [nameOrder, Validators.required],
      imageOrder: [imageOrder, Validators.required],
      priceOrder: [priceOrder, Validators.required]
    });
  }

   private navigateBack() {
    this.router.navigate(['../']);
  }

}

