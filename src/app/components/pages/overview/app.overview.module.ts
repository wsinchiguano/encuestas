import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppOverviewRoutingModule } from './app.overview-routing.module';
import { AppOverviewComponent } from './app.overview.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  imports: [
    CommonModule,
    AppOverviewRoutingModule,
    CardModule,
    ButtonModule,
    RippleModule
  ],
  declarations: [AppOverviewComponent]
})
export class AppOverviewModule { }
