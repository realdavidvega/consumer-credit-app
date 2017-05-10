import {Component, OnInit} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    myForm: FormGroup;
    error = false;
    errorMessage = '';

    constructor(private route: Router, private fb: FormBuilder, private authService: AuthService) {}

    onSignin() {
      this.authService.signinUser(this.myForm.value);
    }

    ngOnInit():any {
        this.myForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

}
