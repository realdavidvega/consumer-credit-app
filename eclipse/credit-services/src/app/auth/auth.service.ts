import { Injectable } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs/Rx';

declare var firebase: any;

@Injectable()
export class AuthService {

  constructor(private router: Router) { }

  async signupUser(user: User){
    await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
    });
    this.router.navigate(['/order']);
  }

  async signinUser(user: User){
    await firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
      alert('Wrong password.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
    });
    this.router.navigate(['/order']);
  }

  isAuthenticated(): Observable<boolean>{
    var self = this;
    const subject = new Subject<boolean>();
    firebase.auth().onAuthStateChanged(function(user){
      if(user){
        subject.next(true);
      } else {
        subject.next(false);
        self.router.navigate(['/login']);
      }
    });

    return subject.asObservable();
  }

  logout(){
    firebase.auth().signOut();
    this.router.navigate(['/login']);
  }

}
