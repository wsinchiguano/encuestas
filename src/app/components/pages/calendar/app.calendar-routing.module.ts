import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppCalendarComponent } from './app.calendar.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppCalendarComponent}
  ])],
  exports: [RouterModule]
})
export class AppCalendarRoutingModule { }
