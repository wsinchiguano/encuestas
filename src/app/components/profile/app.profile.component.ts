import { Component } from '@angular/core';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';

@Component({
    selector: 'app-profile',
    templateUrl: './app.profile.component.html',
})
export class AppProfileComponent {

    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'Profile' }
        ]);
    }
}
