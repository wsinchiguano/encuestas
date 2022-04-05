import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCalendarRoutingModule } from './app.calendar-routing.module';
import { AppCalendarComponent } from './app.calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

FullCalendarModule.registerPlugins([
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin
]);

@NgModule({
  imports: [
    CommonModule,
    AppCalendarRoutingModule,
    FullCalendarModule,
    CalendarModule,
    InputTextModule,
    DialogModule,
    CheckboxModule,
    ButtonModule
  ],
  declarations: [AppCalendarComponent]
})
export class AppCalendarModule { }
