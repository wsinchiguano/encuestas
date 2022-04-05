import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPricingRoutingModule } from './app.pricing-routing.module';
import { AppPricingComponent } from './app.pricing.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    AppPricingRoutingModule,
    CardModule,
    ButtonModule,
  ],
  declarations: [AppPricingComponent]
})
export class AppPricingModule { }
