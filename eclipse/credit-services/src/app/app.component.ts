import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

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


//TODO: Terminar vista OnConfirm (arreglar estilo y meter un Saber Más de creditos al consumo)

//TODO: Hacer vistas Finish y Cancel

//TODO: Diseñar e implementar token de salida de Cancel/Finish

//TODO: Hacer que se guarden los datos de registro en Array/Service. Metemos unos predefinidos, pero si hay nuevos, sobreescribimos

//TODO: Conectar todo con Firebase (login/registro, datosCliente, tokenSalida)

//TODO OPCIONAL: Implementar token de entrada: Order (POST) -> Firebase; Firebase -> (GET) Onboarding

//TODO OPCIONAL: Posibilidad meter varias tarjetas y elegir una
