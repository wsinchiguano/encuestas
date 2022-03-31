import {Component} from '@angular/core';
import {BreadcrumbService} from 'src/app/service/app.breadcrumb.service';
import {AppLayoutComponent} from 'src/app/app.layout.component';

@Component({
    templateUrl: './app.invoice.component.html'
})
export class AppInvoiceComponent {

    constructor(private breadcrumbService: BreadcrumbService, public appMain: AppLayoutComponent) {
        this.breadcrumbService.setItems([
            {label: 'Invoice'}
        ]);
    }

    print() {
        window.print();
    }
}
