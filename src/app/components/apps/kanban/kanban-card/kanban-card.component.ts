import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { KanbanCard } from 'src/app/api/kanban';

@Component({
    selector: 'kanban-card',
    templateUrl: './kanban-card.component.html',
    styleUrls: ['./kanban-card.component.scss']
})
export class KanbanCardComponent implements OnInit {

    @Input() content: KanbanCard;

    menuItems: MenuItem[];

    constructor() { }

    ngOnInit(): void {
        this.menuItems = [
          {label:'List actions',  items: [
              {separator: true},
              {label:'Copy list'},
              {label:'Copy list'},
              {label:'Move list'},
          ]}
        ];
    }


    parseDate(timestamp) {
        return new Date(timestamp).toDateString().split(' ').slice(1,3).join(' ');
    }

}
