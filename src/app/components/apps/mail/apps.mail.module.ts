import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsMailRoutingModule } from './apps.mail-routing.module';
import { AppsMailComponent } from './apps.mail.component';
import { InboxComponent } from './inbox/inbox.component';
import { ComposeComponent } from './compose/compose.component';
import { DetailComponent } from './detail/detail.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button'
import { RippleModule } from 'primeng/ripple'

@NgModule({
  imports: [
    CommonModule,
    AppsMailRoutingModule,
    MenuModule,
    ButtonModule,
    RippleModule
  ],
  declarations: [AppsMailComponent, InboxComponent, ComposeComponent, DetailComponent, SidebarComponent]
})
export class AppsMailModule { }
