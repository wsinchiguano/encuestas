import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MailService } from 'src/app/service/mailservice';
import { animate, style, transition, trigger, animation, useAnimation } from "@angular/animations";

const showAnimation = animation([
    style({ transform: 'translateX(-100%)', opacity: 0 }),
    animate('150ms cubic-bezier(0, 0, 0.2, 1)')
]);

const hideAnimation = animation([
    animate('150ms cubic-bezier(0, 0, 0.2, 1)', style({ transform: 'translateX(-100%)', opacity: 0 }))
]);

@Component({
    selector: 'app-apps.mail',
    templateUrl: './apps.mail.component.html',
    styleUrls: [`./apps.mail.component.scss`],
    animations: [
        trigger('panelState', [
            transition('void => visible', [
                useAnimation(showAnimation)
            ]),
            transition('visible => void', [
                useAnimation(hideAnimation)
            ])
        ])
    ],
})
export class AppsMailComponent implements OnDestroy {

    sidebarSubscription: Subscription;

    sidebarState: boolean;

    constructor(private mailService: MailService){
        this.sidebarSubscription = this.mailService.sidebarState$.subscribe(state => {
            this.sidebarState = state

        });
    }

    ngOnDestroy(): void {
        this.sidebarSubscription.unsubscribe();
    }
}
