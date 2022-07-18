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
  mostrar = false;

  constructor(public onboardingService: OnboardingService) { }

  ngOnInit() {
    this.onboardingService.getConditions().subscribe((data: any) => {
      this.token = data.token;
      this.startDate = data.startDate;
      this.condiciones = data.condiciones;
      this.value = data.value;


      if(data.value == 0){
        this.value = undefined;
        this.mes = 'Pago inmediato';

        this.condiciones = 0;
        this.cuotaMes = undefined;

      } else if (data.value == 1) {
        this.mes = 'mes';
        this.cuotaMes = undefined;
        this.mostrar = true;

      } else {
        this.mes = 'meses';
        this.cuotaMes = '/ mes';
        this.mostrar = true;
      }

    });
  }

}
