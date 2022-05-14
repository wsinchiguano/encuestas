import { Component, OnInit, OnDestroy} from '@angular/core';
import { Task } from 'src/app/api/task';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';
import { TaskService } from 'src/app/service/taskservice';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-app.tasklist',
    templateUrl: './apps.tasklist.component.html',
    providers: [TaskService]
})
export class AppsTaskListComponent implements OnInit {

    upcoming: Task[];

    inProgress: Task[];

    completed: Task[];

    constructor(public breadcrumbService: BreadcrumbService, private taskService: TaskService, private config: PrimeNGConfig) {
        this.breadcrumbService.setItems([
            {label: 'Task List'}
        ]);
    }

    ngOnInit(): void {
        this.config.ripple = false;
        this.taskService.getTasks().then(tasks => this.categorize(tasks));
    }

    categorize(tasks) {
        this.upcoming = tasks.filter(t => t.completed === null);
        this.inProgress = tasks.filter(t => t.completed === false);
        this.completed = tasks.filter(t => t.completed);
    }
}