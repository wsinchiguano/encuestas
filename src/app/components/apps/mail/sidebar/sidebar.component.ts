import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'mail-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    
    activeIndex: number = 0;

    items: MenuItem[];

    constructor() { }

    ngOnInit(): void {
        this.items = [
            {label: 'Inbox', icon: 'pi pi-inbox', badge: '1100'},
            {label: 'Starred', icon: 'pi pi-star'},
            {label: 'Spam', icon: 'pi pi-ban'},
            {label: 'Important', icon: 'pi pi-bookmark'},
            {label: 'Sent', icon: 'pi pi-send'},
            {label: 'Drafts', icon: 'pi pi-file'},
            {label: 'Trash', icon: 'pi pi-trash'}
        ];
    }
}
