import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    {path:'calendar', loadChildren: () => import('./calendar/apps.calendar.module').then(m => m.AppsCalendarModule)}
  ])],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
