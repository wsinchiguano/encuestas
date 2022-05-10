import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppOverviewComponent } from './app.overview.component';



@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppOverviewComponent}
  ])],
  exports: [RouterModule]
})
export class AppOverviewRoutingModule { }
