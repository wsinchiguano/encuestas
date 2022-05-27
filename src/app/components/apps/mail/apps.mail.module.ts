import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsMailRoutingModule } from './apps.mail-routing.module';
import { AppsMailComponent } from './apps.mail.component';
import { InboxComponent } from './inbox/inbox.component';
import { ComposeComponent } from './compose/compose.component';
import { DetailComponent } from './detail/detail.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    AppsMailRoutingModule
  ],
  declarations: [AppsMailComponent, InboxComponent, ComposeComponent, DetailComponent, SidebarComponent]
})
export class AppsMailModule { }
