import { Component, OnInit } from '@angular/core';
import { AppLayoutComponent } from 'src/app/app.layout.component';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-faq',
    templateUrl: './app.faq.component.html',
    styles: [`
      :host ::ng-deep .p-menuitem-link {
        padding: 2rem;
        border-radius: 6px;
        
      }
    `]
})
export class AppFaqComponent implements OnInit {
    
    items: MenuItem[];

    content: string = `Mailing`;

    constructor(private breadcrumbService: BreadcrumbService, public appMain: AppLayoutComponent) {
      this.breadcrumbService.setItems([
          {label: 'FAQ'}
      ]);
    }


    ngOnInit(): void {
      this.items = [
        {label: 'Mailing', icon: 'pi pi-fw pi-envelope', command: ($event) => this.changeContent($event)},
        {label: 'General', icon: 'pi pi-fw pi-inbox', command: ($event) => this.changeContent($event)},
        {label: 'Blocked', icon: 'pi pi-fw pi-ban', command: ($event) => this.changeContent($event)},
        {label: 'Important', icon: 'pi pi-fw pi-bookmark', command: ($event) => this.changeContent($event)},
      ]
    };

    changeContent(event) {
      this.content = event.item.label;
    }
}
