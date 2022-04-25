import { Component } from '@angular/core';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';

interface Create {
    name: string;
}

@Component({
    templateUrl: './app.create.component.html'
})
export class AppCreateComponent {

    pushNotifacitons;
    inStock;
    smsNotifications;

    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'Create' }
        ]);
    }


}
