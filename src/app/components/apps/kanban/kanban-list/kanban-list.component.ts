import { Component, OnInit, Input, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { KanbanCard } from 'src/app/api/kanban';
import { AppsKanbanComponent } from '../apps.kanban.component';

@Component({
    selector: 'kanban-list',
    templateUrl: './kanban-list.component.html',
    styleUrls: ['./kanban-list.component.scss']
})
export class KanbanListComponent implements OnInit {

    @Input() title: string = 'backlog';

    menuItems: MenuItem[];

    cardContent: KanbanCard;

    constructor(public parent: AppsKanbanComponent) { }

    ngOnInit(): void {
        this.menuItems = [
            {label:'List actions',  items: [
                {separator: true},
                {label:'Copy list'},
                {label:'Copy list'},
                {label:'Move list'},
            ]}
        ];

        this.cardContent = {
            title: 'Qualitative resarch planning',
            description: 'Hey there, we’re just writing to let you know',
            startDate:"2022-05-18",
            dueDate:"2022-05-18",
            completed: false,
            progress: 0,
            assignees: [
              {name: 'Ioni Bowcher', image: 'ionibowcher.png'},
              {name: 'Amy Elsner', image: 'amyelsner.png'},
            ],
            comments: [
              {name: 'Ioni Bowcher', image: 'ionibowcher.png', message: 'How likely are you to recommend our company'},
              {name: 'Amy Elsner', image: 'amyelsner.png', message: 'Ok thanks!'},
            ],
            priority: {color: '#3b82f6', title: 'Medium'},
            attachments: 4
        }
    };


    toggleSidebar() {
        this.parent.sidebar = {
            visible: true,
            content: 0
        }
    }
}
