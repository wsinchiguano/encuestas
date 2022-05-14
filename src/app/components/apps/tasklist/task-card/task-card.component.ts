import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Task } from 'src/app/api/task';

@Component({
    selector: 'task-card',
    templateUrl: './task-card.component.html',
    styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

    @Input() taskList: Task[];
    
    @Input() title: string;

    selectedTasks: Task[];

    menuItems: MenuItem[];

    constructor() { }

    ngOnInit(): void {
        this.menuItems = [
            {label: 'Edit', icon: 'pi pi-pencil'},
            {label: 'Delete', icon: 'pi pi-trash'}
        ];
    }

    parseDate(date){
        let d = new Date(date);
        return d.toUTCString().split(' ').slice(1,3).join(' ');
    }

}
