import { OnboardingService } from '../onboarding.service';
import { Component, OnInit } from '@angular/core';
import {Tarjeta} from "../tarjeta";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-on-type',
  templateUrl: './on-type.component.html',
  styleUrls: ['./on-type.component.css']
})
export class OnTypeComponent implements OnInit {

  tarjeta: Tarjeta;
  myForm: FormGroup;

  constructor(private onboardingService: OnboardingService, private fb: FormBuilder) { }

  ngOnInit() {
    this.onboardingService.getPayment().subscribe((tarjeta: Tarjeta) => this.tarjeta = tarjeta);

    this.myForm = this.fb.group({
      type: ['', Validators.required],
      check: [false, Validators.required]
    });

  }

  onBack() {
    this.onboardingService.setOnType();
  }

  async onNext(){
    await


    this.onboardingService.setOnPayment();
    this.onboardingService.setOnIne();
  }


}
