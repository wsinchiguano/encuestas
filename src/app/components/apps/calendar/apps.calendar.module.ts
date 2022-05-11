import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppsCalendarRoutingModule } from './apps.calendar-routing.module';
import { AppsCalendarComponent } from './apps.calendar.component';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppsCalendarRoutingModule,
    FullCalendarModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    ToastModule,
    RippleModule
  ],
  declarations: [AppsCalendarComponent]
})
export class AppsCalendarModule { }
