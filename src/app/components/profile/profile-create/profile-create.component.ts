import { Component } from '@angular/core';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';

interface Create {
    name: string;
}

@Component({
    selector: 'profile-create',
    templateUrl: './profile-create.component.html'
})
export class ProfileCreateComponent {

    pushNotifacitons: boolean = false;

    emailNotifications: boolean = true;

    smsNotifications: boolean = true;

    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'Create' }
        ]);
    }

}
