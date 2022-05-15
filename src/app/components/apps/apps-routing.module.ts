import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    {path:'calendar', loadChildren: () => import('./calendar/apps.calendar.module').then(m => m.AppsCalendarModule)},
    {path:'tasklist', loadChildren: () => import('./tasklist/apps.tasklist.module').then(m => m.AppsTaskListModule)},
    {path:'chat', loadChildren: () => import('./chat/apps.chat.module').then(m => m.AppsChatModule)},
  ])],
  exports: [RouterModule]
})
export class AppsRoutingModule { }