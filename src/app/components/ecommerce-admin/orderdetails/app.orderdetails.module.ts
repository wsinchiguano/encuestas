import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppOrderDetailsRoutingModule } from './app.orderdetails-routing.module';
import { AppOrderDetailsComponent } from './app.orderdetails.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TimelineModule } from 'primeng/timeline';

@NgModule({
  imports: [
    CommonModule,
    AppOrderDetailsRoutingModule,
    FormsModule,
    ProgressBarModule,
    ButtonModule,
    TableModule,
    TimelineModule,
    RippleModule,
    InputTextModule
  ],
  declarations: [AppOrderDetailsComponent]
})
export class AppOrderDetailsModule { }
