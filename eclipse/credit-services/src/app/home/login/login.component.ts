import { HomeService } from '../home.service';
import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, public http: Http, private auth: HomeService) {
  }

  ngOnInit() {
  }
  
  login(event, username, password) {
    event.preventDefault();
    let body = JSON.stringify({ username, password });
    const headers = new Headers ({'Content-type':'application/json'});
    this.http.post('http://localhost:3001/sessions/create', body, { headers: headers })
      .subscribe(
        response => {
          localStorage.setItem('id_token', response.json().id_token);
          this.router.navigate(['order']);
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }

  signup(event) {
    event.preventDefault();
    this.router.navigate(['home']);
  }

}
