import { Injectable, OnChanges } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import {Tarjeta} from "./tarjeta";

@Injectable()
export class PaymentService {

  public subject = new Subject<any>();

  private tarjetas: Tarjeta[];

  constructor() { }


}
