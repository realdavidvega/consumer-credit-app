import { homeRoutes } from './home.routes';
import { OrderComponent } from './order/order.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    RegisterComponent,
    OrderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    homeRoutes
  ]
})

export class HomeModule {}
