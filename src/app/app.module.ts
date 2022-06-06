import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';

import {DropdownModule} from 'primeng/dropdown';
import {MenuModule} from 'primeng/menu';
import {RippleModule} from 'primeng/ripple';
import {RadioButtonModule} from 'primeng/radiobutton'
import {InputSwitchModule} from 'primeng/inputswitch';
import {CheckboxModule} from 'primeng/checkbox';
import {ShoppingCartModule} from './components/ecommerce/shopping-cart/shopping-cart.module'

import {AppComponent} from './app.component';
import {AppLayoutComponent} from './app.layout.component';
import {AppConfigComponent} from './app.config.component';
import {AppRightmenuComponent} from './app.rightmenu.component';
import {AppMenuComponent} from './app.menu.component';
import {AppMenuitemComponent} from './app.menuitem.component';
import {AppTopBarComponent} from './app.topbar.component';
import {AppSearchComponent} from './app.search.component';
import {AppFooterComponent} from './app.footer.component';
import { BlocksAdComponent } from './app.blocks-ad.component';

import {CountryService} from 'src/app/service/countryservice';
import {CustomerService} from 'src/app/service/customerservice';
import {EventService} from 'src/app/service/eventservice';
import {IconService} from 'src/app/service/iconservice';
import {NodeService} from 'src/app/service/nodeservice';
import {PhotoService} from 'src/app/service/photoservice';
import {ProductService} from 'src/app/service/productservice';
import {BreadcrumbService} from 'src/app/service/app.breadcrumb.service';
import {MenuService} from './app.menu.service';
import {ConfigService} from 'src/app/service/app.config.service';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        RadioButtonModule,
        DropdownModule,
        InputSwitchModule,
        CheckboxModule,
        MenuModule,
        RippleModule,
        BrowserAnimationsModule,
        ShoppingCartModule
    ],
    declarations: [
        AppComponent,
        AppLayoutComponent,
        AppRightmenuComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        AppConfigComponent,
        AppTopBarComponent,
        AppSearchComponent,
        AppFooterComponent,
        BlocksAdComponent
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, MenuService, BreadcrumbService, ConfigService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
