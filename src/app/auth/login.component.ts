import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  logged = false;
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  onSignin() {
    this.authService.signinUser(this.myForm.value);
    this.logged = true;
  }

  ngOnInit(): any {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

}
