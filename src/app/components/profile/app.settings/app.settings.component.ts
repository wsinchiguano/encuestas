import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';

@Component({
    selector: 'app-app.settings',
    templateUrl: './app.settings.component.html',

})
export class AppSettingsComponent implements OnInit {


    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'Settings' }
        ]);
    }


    ngOnInit() {
    }
    pushNotifacitons: boolean = false;
    onlyDownload: boolean = false;
    smsNotifications: boolean = false;
    darkMode: boolean = false;
    subscribeToNewsletter: boolean = false;
    monthlyProductUpdates: boolean = false;
    messages: boolean = false;
    emailNotifications: boolean = false;


}
