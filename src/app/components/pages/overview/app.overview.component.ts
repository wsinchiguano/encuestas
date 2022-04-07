import {Component, ViewEncapsulation} from '@angular/core';
import {BreadcrumbService} from 'src/app/service/app.breadcrumb.service';

@Component({
    templateUrl: './app.overview.component.html',
    styleUrls: ['./app.overview.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppOverviewComponent {

    visibleMember: number = null;
    
    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'Pricing'}
        ]);
    }
}
