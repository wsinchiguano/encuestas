import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';

@Component({
    selector: 'app-apps.kanban',
    templateUrl: './apps.kanban.component.html',
})
export class AppsKanbanComponent implements OnInit {

    sidebar = {
        visible: false,
        content: null,
    };

    constructor(private breadcrumbService: BreadcrumbService) { 
        this.breadcrumbService.setItems([
            {label: 'Kanban'}
        ]);
    }

    ngOnInit(): void {
    }

    toggleSidebar() {
        this.sidebar = {
            visible: true,
            content: 1
        }
    }
}
