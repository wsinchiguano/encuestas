import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-invoice',
    templateUrl: './invoice.component.html'
})
export class InvoiceComponent {

    constructor(public layoutService: LayoutService) { }

    print() {
        window.print();
    }

    get logo() {
        return this.layoutService.config.colorScheme === 'light' ? 'dark' : 'white';
    }

}
