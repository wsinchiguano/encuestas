import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MailService } from 'src/app/service/mailservice';
import { animate, style, transition, trigger, state } from "@angular/animations";

@Component({
    selector: 'app-apps.mail',
    templateUrl: './apps.mail.component.html',
    styleUrls: [`./apps.mail.component.scss`],
    animations: [
        trigger('slideInOut', [  
          state(
            'in',
            style({
                transform: 'translateX(0)',
                width: '300px',
                opacity: 1,
            })
          ),
          state(
            'out',
            style({
                transform: 'translateX(-100%)',
                width: 0,
                opacity: 0
            })
          ),
          transition('in <=> out', animate('0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99)')),
        ])
    ],
})
export class AppsMailComponent implements OnDestroy {

    sidebarSubscription: Subscription;

    sidebarState: boolean;

    sidebarClosed: boolean = false;

    timeout;
    
    constructor(private mailService: MailService){
        this.sidebarSubscription = this.mailService.sidebarState$.subscribe(state => {
            this.sidebarState = state

        });
    }

    onAnimationStart(event) {
        if (event.fromState === 'in' && event.toState === 'out') {
            this.timeout = setTimeout(() => {this.sidebarClosed = true}, 80)
        }
        if (event.fromState === 'out' && event.toState === 'in') {
            this.sidebarClosed = false;
        }
    }

    ngOnDestroy(): void {
        clearTimeout(this.timeout);
        this.sidebarSubscription.unsubscribe();
    }
}
