import {Component} from '@angular/core';
import { AppLayoutComponent } from 'src/app/app.layout.component';

@Component({
    selector: 'app-login',
    templateUrl: './app.login.component.html',
})
export class AppLoginComponent {

    constructor(public appMain: AppLayoutComponent) {
    }
}
