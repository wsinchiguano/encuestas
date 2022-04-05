import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFaqComponent } from './app.faq.component';
import { AppFaqRoutingModule } from './app.faq-routing.module';
import { MenuModule } from 'primeng/menu';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  imports: [
    CommonModule,
    AppFaqRoutingModule,
    MenuModule,
    AccordionModule
  ],
  declarations: [AppFaqComponent]
})
export class AppFaqModule { }
