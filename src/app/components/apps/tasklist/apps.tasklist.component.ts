import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';

@Component({
    selector: 'app-app.tasklist',
    templateUrl: './apps.tasklist.component.html',
})
export class AppsTaskListComponent implements OnInit {

    constructor(public breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'Task List'}
        ]);
    }

    ngOnInit(): void {
    }

}
