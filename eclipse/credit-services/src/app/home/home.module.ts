import { homeRoutes } from './home.routes';
import { OrderComponent } from './order/order.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { OrderItemComponent } from './order/order-item/order-item.component';


@NgModule({
  declarations: [
    OrderComponent,
    HomeComponent,
    OrderItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    homeRoutes
  ]
})

export class HomeModule {}
