
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBhEElZurKcBuZHBAYTpWFB4YMyAnot5Xo',
      authDomain: 'credit-services-8bfcc.firebaseapp.com',
      databaseURL: 'https://credit-services-8bfcc.firebaseio.com',
      projectId: 'credit-services-8bfcc',
      storageBucket: 'credit-services-8bfcc.appspot.com',
      messagingSenderId: '351510165342'

    });

  }



}
