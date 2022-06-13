import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Mail } from 'src/app/api/mail';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';
import { MailService } from 'src/app/service/mail.service';

@Component({
    selector: 'mail-detail',
    templateUrl: './mail-detail.component.html',
    styleUrls: ['../../../../../assets/demo/editor.scss']
})
export class MailDetailComponent implements OnDestroy {
    
    mail: Mail;

    subscription: Subscription;
    
    sidebarSubscription: Subscription;

    sidebarClosed: boolean = false;

    constructor(private route: ActivatedRoute, private mailService: MailService, private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'Mail Detail'},
        ]);

        this.subscription = this.route.params.pipe(
            switchMap(params => {
              return this.mailService.getMail(params.id)
            })
        ).subscribe(d => this.mail = d);
    }

    toggleSidebar() {
        this.mailService.toggleSidebar();
        this.sidebarClosed = !this.sidebarClosed;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
