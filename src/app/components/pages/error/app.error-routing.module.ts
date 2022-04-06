import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Error404Component } from './404/error404.component';
import { Error505Component } from './505/error505.component';
import { AppErrorComponent } from './app.error.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path:'', component: AppErrorComponent},
    {path: '505', component: Error505Component},
    {path: '404', component: Error404Component},
  ])],
  exports: [RouterModule]
})
export class AppErrorRoutingModule { }
