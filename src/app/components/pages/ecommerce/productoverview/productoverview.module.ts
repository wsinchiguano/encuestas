import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductOverviewComponent } from './productoverview.component';
import { ProductoverviewRoutingModule } from './productoverview-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProductoverviewRoutingModule
  ],
  declarations: [ProductOverviewComponent]
})
export class ProductoverviewModule { }
