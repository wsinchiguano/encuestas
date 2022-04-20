import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [RouterModule.forChild([
    {path: 'create', loadChildren: () => import('./create/app.create.module').then(m => m.AppCreateModule)}
  ])],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
