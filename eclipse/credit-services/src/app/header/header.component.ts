
import { AuthService } from '../auth/auth.service';
import { Component, OnInit } from '@angular/core';

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
