import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';

@Component({
    selector: 'profile-overview',
    templateUrl: './profile-overview.component.html',
})
export class ProfileOverviewComponent implements OnInit {

    selectedDate: number;

    days: any[];

    selectedDay: any;

    selectedWeek: any;

    week: any[];

    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'Profile Overview' }
        ]);
    }

    ngOnInit() {
        this.days = [
            { name: 'Sunday' },
            { name: 'Monday' },
            { name: 'Tuesday' },
            { name: 'Wednesday' },
            { name: 'Thursday' },
            { name: 'Friday' },
            { name: 'Saturday' }
        ];

        this.week = [
            { name: 'Week 1' },
            { name: 'Week 2' },
        ];
    }
}


