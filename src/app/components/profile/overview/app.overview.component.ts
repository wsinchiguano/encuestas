import { Component } from '@angular/core';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';

@Component({
  selector: 'app-app.overview',
  templateUrl: './app.overview.component.html',

})
export class AppOverviewComponent {

  constructor(private breadcrumbService: BreadcrumbService) { 
    this.breadcrumbService.setItems([
      { label: 'Overview' }
    ]);
  }
  
}
