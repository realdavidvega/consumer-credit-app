import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { AuthHttp, JwtHelper } from 'angular2-jwt';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  jwt: string;
  decodedJwt: string;
  response: string;
  api: string;

  jwtHelper: JwtHelper = new JwtHelper();

  constructor(public router: Router, public http: Http, public authHttp: AuthHttp) {
    this.jwt = localStorage.getItem('id_token');
    this.decodedJwt = this.jwt && this.jwtHelper.decodeToken(this.jwt);
  }

  ngOnInit() {
  }

}
