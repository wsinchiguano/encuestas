import { Component, OnInit, OnDestroy } from '@angular/core';
import { KanbanList } from 'src/app/api/kanban';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';
import { KanbanService } from 'src/app/service/kanbanservice';
import { Subscription } from 'rxjs';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-apps.kanban',
    templateUrl: './apps.kanban.component.html',
    styleUrls: ['./apps.kanban.component.scss']
})
export class AppsKanbanComponent implements OnInit, OnDestroy {

    sidebarVisible: boolean;

    lists: KanbanList[];

    listIds: string[];

    subscription = new Subscription();

    constructor(private breadcrumbService: BreadcrumbService, private kanbanService: KanbanService) { 
        this.breadcrumbService.setItems([
            {label: 'Kanban'}
        ]);

        this.subscription = this.kanbanService.lists$.subscribe(data => {
            this.lists = data
            this.listIds = data.map(l => l.listId);
        });
    }

    ngOnInit(): void {}

    toggleSidebar() {
        this.sidebarVisible = true;
    }

    addList() {
        this.kanbanService.addList();
    }

    dropList(event: CdkDragDrop<KanbanList[]>){
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
