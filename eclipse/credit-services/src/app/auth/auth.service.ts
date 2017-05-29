import { OnboardingService } from '../onboarding/onboarding.service';
import { Injectable, EventEmitter } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs/Rx';

import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  user: User;
  subject = new Subject<boolean>();
  registrado = new EventEmitter<boolean>();

  constructor(private router: Router, private onboardingService: OnboardingService) {}

  signupUser(user: User) {
    sessionStorage.setItem('user_token', JSON.stringify(user));
    this.subject.next(true);

    this.onboardingService.setOnPerson();
    this.router.navigate(['/onboarding']);
  }

  signinUser(user: User) {
    sessionStorage.setItem('user_token', JSON.stringify(user));
    this.subject.next(true);

    this.onboardingService.setOnPayment();
    this.onboardingService.setOnPersonCard();
    this.router.navigate(['/onboarding']);
  }

  isAuthenticated(): Observable<boolean> {
    return this.subject.asObservable();
  }

  logout() {
    sessionStorage.removeItem('user_token');
    this.subject.next(false);
    this.router.navigate(['/login']);
  }

}
