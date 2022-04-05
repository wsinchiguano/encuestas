import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTimelineDemoRoutingModule } from './app.timelinedemo-routing.module';
import { AppTimelineDemoComponent } from './app.timelinedemo.component';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';

@NgModule({
  imports: [
    CommonModule,
    AppTimelineDemoRoutingModule,
    CardModule,
    TimelineModule
  ],
  declarations: [AppTimelineDemoComponent]
})
export class AppTimelineDemoModule { }
