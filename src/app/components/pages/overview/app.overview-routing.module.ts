import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppOverviewComponent } from './app.overview.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppOverviewComponent}
  ])],
  exports: [RouterModule]
})
export class AppOverviewRoutingModule { }
