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
import { RippleModule } from 'primeng/ripple';
import { MailService } from 'src/app/service/mailservice';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RatingModule } from 'primeng/rating';
import { AvatarModule } from 'primeng/avatar';

@NgModule({
  imports: [
    CommonModule,
    AppsMailRoutingModule,
    MenuModule,
    ButtonModule,
    RippleModule,
    TableModule,
    ToolbarModule,
    InputTextModule,
    CheckboxModule,
    RatingModule,
    AvatarModule
  ],
  declarations: [AppsMailComponent, InboxComponent, ComposeComponent, DetailComponent, SidebarComponent],
  providers: [MailService]
})
export class AppsMailModule { }
