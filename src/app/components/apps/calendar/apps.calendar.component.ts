import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../../service/app.breadcrumb.service';
@Component({
    selector: 'app-apps.calendar',
    templateUrl: './apps.calendar.component.html'
})
export class AppsCalendarComponent implements OnInit {

    constructor(private breadcrumbService: BreadcrumbService) { 
      this.breadcrumbService.setItems([
        { label: 'Calendar' }
      ]);
    }

    ngOnInit(): void {
    }

}
