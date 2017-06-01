import {Component, OnInit} from '@angular/core';
import {OnboardingService} from "../onboarding.service";

@Component({
  selector: 'app-on-finish',
  templateUrl: './on-finish.component.html',
  styleUrls: ['./on-finish.component.css']
})
export class OnFinishComponent implements OnInit {

  token: number;
  startDate: Date;
  condiciones: number;
  value: number;
  mes: string;
  cuotaMes: string;

  constructor(private onboardingService: OnboardingService) { }

  ngOnInit() {
    this.onboardingService.getConditions().subscribe((data: any) => {
      this.token = data.token;
      this.startDate = data.startDate;
      this.condiciones = data.condiciones;
      this.value = data.value;

      if(data.value == 1){
        this.mes = 'mes';
        this.cuotaMes = '';
      } else {
        this.mes = 'meses';
        this.cuotaMes = '/ mes';
      }

    });
  }

}
