import { Injectable, OnChanges } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class OnboardingService {

  private activations = {
    onStart: false,
    onPayment: false,
    onPerson: false,
    onSignature: false,
    onContact: false,
    onCalculation: false,
    onOverview: false,
    onType: false,
    onFinish: false
  };

  public subject = new Subject<any>();

  constructor() { }

  public setOnStart() {
    this.activations.onStart = !this.activations.onStart;
    this.subject.next(this.activations);
  }

  public setOnPayment() {
    this.activations.onPayment = !this.activations.onPayment;
    this.subject.next(this.activations);
  }

  public setOnPerson() {
    this.activations.onPerson = !this.activations.onPerson;
    this.subject.next(this.activations);
  }

  public setOnSignature() {
    this.activations.onSignature = !this.activations.onSignature;
    this.subject.next(this.activations);
  }

  public setOnContact() {
    this.activations.onContact = !this.activations.onContact;
    this.subject.next(this.activations);
  }

  public setOnCalculation() {
    this.activations.onCalculation = !this.activations.onCalculation;
    this.subject.next(this.activations);
  }
  
    public setOnType() {
    this.activations.onType = !this.activations.onType;
    this.subject.next(this.activations);
  }

  public setOnFinish() {
    this.activations.onFinish = !this.activations.onFinish;
    this.subject.next(this.activations);
  }

  public getActivations(): Observable<any> {
    return this.subject.asObservable();
  }

}
