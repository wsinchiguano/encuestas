import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsChatRoutingModule } from './apps.chat-routing.module';
import { AppsChatComponent } from './apps.chat.component';
import { ChatSidebarComponent } from './chat-sidebar/chat-sidebar.component';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';

@NgModule({
  imports: [
    CommonModule,
    AppsChatRoutingModule,
    AvatarModule,
    InputTextModule,
    ButtonModule,
    MenuModule,
  ],
  declarations: [
    ChatSidebarComponent,
    AppsChatComponent
  ],
})
export class AppsChatModule { }
