import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../../../service/app.config.service';
import { AppConfig } from '../../../../api/appconfig';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-error404',
    templateUrl: './error404.component.html',
})
export class Error404Component {
    
    config: AppConfig;

    subscription: Subscription;
    
    constructor(public router: Router, public configService: ConfigService) {
      this.config = this.configService.config;
      this.subscription = this.configService.configUpdate$.subscribe(config => {
          this.config = config;
      });
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
}
