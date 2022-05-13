import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsTaskListComponent } from './apps.tasklist.component';
import { AppsTaskListRoutingModule } from './apps.tasklist-routing.module';



@NgModule({
  imports: [
    CommonModule,
    AppsTaskListRoutingModule
  ],
  declarations: [AppsTaskListComponent]
})
export class AppsTaskListModule { }
