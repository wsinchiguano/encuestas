import { Component, OnInit } from '@angular/core';
import { Mail } from 'src/app/api/mail';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';
import { MailService } from 'src/app/service/mailservice';

@Component({
    selector: 'mail-inbox',
    templateUrl: './inbox.component.html',
    styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

    mails: Mail[];

    selectedMails: Mail[];

    cols: any[];

    checkbox: boolean = false;

    tableCheckbox:Mail;

    constructor(private mailService: MailService, private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'Inbox'}
        ]);
    }

    ngOnInit(): void {
        this.mailService.getMails().then(data => this.mails = data);

        this.cols = [
            {field: 'from', header: 'From'},
            {field: 'title', header: 'Title'},
            {field: 'date', header: 'Date'}
        ]
    }


    logValue(val) {
        console.log(val)
    }

}
