import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';

@Component({
  selector: 'app-followers',
  templateUrl: './app.followers.component.html',
})
export class AppFollowersComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService) { 
    this.breadcrumbService.setItems([
      { label: 'Followers' }
    ]);
  }

  ngOnInit(): void {
  }

}
