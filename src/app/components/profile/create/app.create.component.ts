import {Component} from '@angular/core';
import {BreadcrumbService} from 'src/app/service/app.breadcrumb.service';

@Component({
    templateUrl: './app.create.component.html'
})
export class AppCreateComponent {
    
    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'Create'}
        ]);
    }
}
