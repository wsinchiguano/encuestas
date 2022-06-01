import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppsKanbanRoutingModule } from './apps.kanban-routing.module';
import { AppsKanbanComponent } from './apps.kanban.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { KanbanSidebarComponent } from './kanban-sidebar/kanban-sidebar.component';
import { KanbanCardComponent } from './kanban-card/kanban-card.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FormsModule } from '@angular/forms';
import { ProgressBarModule } from 'primeng/progressbar';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { ChipsModule } from 'primeng/chips';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SidebarModule } from 'primeng/sidebar';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppsKanbanRoutingModule,
    ButtonModule,
    RippleModule,
    ProgressBarModule,
    AvatarModule,
    InputTextModule,
    ChipsModule,
    CalendarModule,
    DropdownModule,
    InputTextareaModule,
    SidebarModule,
  ],
  declarations: [
    AppsKanbanComponent,
    KanbanBoardComponent,
    KanbanSidebarComponent,
    KanbanCardComponent
  ],
})
export class AppsKanbanModule { }
