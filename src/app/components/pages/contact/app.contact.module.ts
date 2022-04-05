import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppContactComponent } from './app.contact.component';
import { AppContactRoutingModule } from './app.contact-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppContactRoutingModule
  ],
  declarations: [AppContactComponent]
})
export class AppContactModule { }
