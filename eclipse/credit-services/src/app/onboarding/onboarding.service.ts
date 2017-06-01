import { Injectable, OnChanges } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class OnboardingService {

  private activations = {
    onStart: false,
    onPayment: false,
    onPerson: false,
    onPersonCard: false,
    onSignature: false,
    onContact: false,
    onCalculation: false,
    onOverview: false,
    onType: false,
    onIne: false,
    onFinish: false,
    onConfirm: false
  };

  public condSubject = new Subject<any>();

  public activSubject = new Subject<any>();
  public paymentSubject = new Subject<any>();
  public typeSubject = new Subject<any>();

  constructor() { }

  public setOnStart() {
    this.activations.onStart = !this.activations.onStart;
    this.activSubject.next(this.activations);
  }

  public setOnPayment() {
    this.activations.onPayment = !this.activations.onPayment;
    this.activSubject.next(this.activations);
  }

  public setOnPerson() {
    this.activations.onPerson = !this.activations.onPerson;
    this.activSubject.next(this.activations);
  }

    public setOnPersonCard() {
    this.activations.onPersonCard = !this.activations.onPersonCard;
    this.activSubject.next(this.activations);
  }

  public setOnSignature() {
    this.activations.onSignature = !this.activations.onSignature;
    this.activSubject.next(this.activations);
  }

  public setOnContact() {
    this.activations.onContact = !this.activations.onContact;
    this.activSubject.next(this.activations);
  }

  public setOnCalculation() {
    this.activations.onCalculation = !this.activations.onCalculation;
    this.activSubject.next(this.activations);
  }

    public setOnType() {
    this.activations.onType = !this.activations.onType;
    this.activSubject.next(this.activations);
  }
  public setOnIne(){
    this.activations.onIne = !this.activations.onIne;
    this.activSubject.next(this.activations);
  }

  public setOnConfirm(){
    this.activations.onConfirm = !this.activations.onConfirm;
    this.activSubject.next(this.activations);
  }

  public setOnFinish() {
    this.activations.onFinish = !this.activations.onFinish;
    this.activSubject.next(this.activations);
  }

  public getActivations(): Observable<any> {
    return this.activSubject.asObservable();
  }

  public getConditions(): Observable<any> {
    return this.condSubject.asObservable();
  }

  public getActivation(){
    return this.activations;
  }

  public getPayment(): Observable<any> {
    return this.paymentSubject.asObservable();
  }

  public getType(): Observable<any> {
    return this.typeSubject.asObservable();
  }

}
