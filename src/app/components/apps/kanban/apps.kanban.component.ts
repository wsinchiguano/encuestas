import { Component, OnInit } from '@angular/core';
import { KanbanList } from 'src/app/api/kanban';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';
import { KanbanService } from 'src/app/service/kanbanservice';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-apps.kanban',
    templateUrl: './apps.kanban.component.html',
})
export class AppsKanbanComponent implements OnInit {

    sidebarVisible: boolean;

    lists: KanbanList[];

    subscription = new Subscription();

    constructor(private breadcrumbService: BreadcrumbService, private kanbanService: KanbanService) { 
        this.breadcrumbService.setItems([
            {label: 'Kanban'}
        ]);

        this.subscription = this.kanbanService.lists$.subscribe(data => {this.lists = data; console.log(data)});
    }

    ngOnInit(): void {

        console.log(this.lists);

    }

    toggleSidebar() {
        this.sidebarVisible = true;
    }

    addList() {
        this.kanbanService.addList();
    }
}
