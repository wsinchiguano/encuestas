import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    {path:'calendar', loadChildren: () => import('./calendar/apps.calendar.module').then(m => m.AppsCalendarModule)},
    {path:'tasklist', loadChildren: () => import('./tasklist/apps.tasklist.module').then(m => m.AppsTaskListModule)}
  ])],
  exports: [RouterModule]
})
export class AppsRoutingModule { }