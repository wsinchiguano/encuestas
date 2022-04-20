import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCreateRoutingModule } from './app.create-routing.module';
import { AppCreateComponent } from './app.create.component';

@NgModule({
  imports: [
    CommonModule,
    AppCreateRoutingModule
  ],
  declarations: [AppCreateComponent]
})
export class AppCreateModule { }
