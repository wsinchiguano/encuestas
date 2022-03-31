import { Component } from '@angular/core';
import {AppLayoutComponent} from './app.layout.component';

@Component({
  selector: 'app-footer',
  templateUrl: './app.footer.component.html'
})
export class AppFooterComponent {
  constructor(public appMain: AppLayoutComponent) {}
}
