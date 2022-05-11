import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
<<<<<<< HEAD:src/app/components/apps/apps-routing.module.ts
    {path:'calendar', loadChildren: () => import('./calendar/apps.calendar.module').then(m => m.AppsCalendarModule)}
=======
    {path: '', component: AppOverviewComponent},

>>>>>>> 1a8ff9d9f1b16d8c99802d17e61af0a269b107ac:src/app/components/profile/overview/app.overview-routing.module.ts
  ])],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
