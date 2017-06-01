
import { AuthService } from '../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth: boolean;

  constructor(public auth: AuthService) {}

  ngOnInit() {
    this.auth.isAuthenticated().subscribe((flag: boolean) => {
      this.isAuth = flag;
  });
  }

}
