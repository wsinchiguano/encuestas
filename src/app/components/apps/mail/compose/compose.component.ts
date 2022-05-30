import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';
@Component({
    selector: 'mail-compose',
    templateUrl: './compose.component.html',
    styleUrls: ['./compose.component.scss', '../../../../../assets/demo/editor.scss']
})
export class ComposeComponent implements OnInit {

    constructor(private breadcrumbService: BreadcrumbService) { 
        this.breadcrumbService.setItems([
          {label: 'Mail Compose'},
        ]);
    }

    ngOnInit(): void {
    }
}
