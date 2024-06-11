import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppConfigModule } from '../layout/config/app.config.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AppConfigModule,
    PrimeNgModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
