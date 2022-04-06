import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../../../service/app.config.service';
import { AppConfig } from '../../../../api/appconfig';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-error505',
    templateUrl: './error505.component.html',
})
export class Error505Component {
    
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
