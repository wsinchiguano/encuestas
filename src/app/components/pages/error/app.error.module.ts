import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppErrorRoutingModule } from './app.error-routing.module';
import { AppErrorComponent } from './app.error.component';

@NgModule({
  imports: [
    CommonModule,
    AppErrorRoutingModule
  ],
  declarations: [AppErrorComponent]
})
export class AppErrorModule { }
