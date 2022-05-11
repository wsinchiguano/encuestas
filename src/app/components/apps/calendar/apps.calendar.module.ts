import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsCalendarRoutingModule } from './apps.calendar-routing.module';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AppsCalendarComponent } from './apps.calendar.component';

@NgModule({
  imports: [
    CommonModule,
    AppsCalendarRoutingModule,
    FullCalendarModule,
    DialogModule,
    ButtonModule,
    RippleModule
  ],
  declarations: [AppsCalendarComponent]
})
export class AppsCalendarModule { }
