import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppProductListRoutingModule } from './app.productlist-routing.module';
import { AppProductListComponent } from './app.productlist.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';

@NgModule({
  imports: [
    CommonModule,
    AppProductListRoutingModule,
    TableModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    MenuModule
  ],
  declarations: [AppProductListComponent]
})
export class AppProductListModule { }
