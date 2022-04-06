import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppErrorRoutingModule } from './app.error-routing.module';
import { AppErrorComponent } from './app.error.component';
import { Error404Component } from './404/error404.component';
import { Error505Component } from './505/error505.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    AppErrorRoutingModule,
    ButtonModule
  ],
  declarations: [AppErrorComponent, Error404Component, Error505Component]
})
export class AppErrorModule { }
