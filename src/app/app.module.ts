import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';

import {AccordionModule} from 'primeng/accordion';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {BadgeModule} from 'primeng/badge';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {ChartModule} from 'primeng/chart';
import {CheckboxModule} from 'primeng/checkbox';
import {ChipModule} from 'primeng/chip';
import {ChipsModule} from 'primeng/chips';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ColorPickerModule} from 'primeng/colorpicker';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';
import {DividerModule} from 'primeng/divider';
import {DropdownModule} from 'primeng/dropdown';
import {FieldsetModule} from 'primeng/fieldset';
import {FileUploadModule} from 'primeng/fileupload';
import {FullCalendarModule} from '@fullcalendar/angular';
import {GalleriaModule} from 'primeng/galleria';
import {ImageModule} from 'primeng/image';
import {InplaceModule} from 'primeng/inplace';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {KnobModule} from 'primeng/knob';
import {LightboxModule} from 'primeng/lightbox';
import {ListboxModule} from 'primeng/listbox';
import {MegaMenuModule} from 'primeng/megamenu';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MultiSelectModule} from 'primeng/multiselect';
import {OrderListModule} from 'primeng/orderlist';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {PaginatorModule} from 'primeng/paginator';
import {PanelModule} from 'primeng/panel';
import {PanelMenuModule} from 'primeng/panelmenu';
import {PasswordModule} from 'primeng/password';
import {PickListModule} from 'primeng/picklist';
import {ProgressBarModule} from 'primeng/progressbar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ScrollTopModule} from 'primeng/scrolltop';
import {SelectButtonModule} from 'primeng/selectbutton';
import {SidebarModule} from 'primeng/sidebar';
import {SkeletonModule} from 'primeng/skeleton';
import {SlideMenuModule} from 'primeng/slidemenu';
import {SliderModule} from 'primeng/slider';
import {SplitButtonModule} from 'primeng/splitbutton';
import {SplitterModule} from 'primeng/splitter';
import {StepsModule} from 'primeng/steps';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {TagModule} from 'primeng/tag';
import {TerminalModule} from 'primeng/terminal';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {TimelineModule} from 'primeng/timeline';
import {ToastModule} from 'primeng/toast';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {ToolbarModule} from 'primeng/toolbar';
import {TooltipModule} from 'primeng/tooltip';
import {TreeModule} from 'primeng/tree';
import {TreeTableModule} from 'primeng/treetable';
import {VirtualScrollerModule} from 'primeng/virtualscroller';

import {AppCodeModule} from './components/primeblocks/app-code/app.code.component';
import {AppComponent} from './app.component';
import {AppLayoutComponent} from './app.layout.component';
import {AppConfigComponent} from './app.config.component';
import {AppRightmenuComponent} from './app.rightmenu.component';
import {AppMenuComponent} from './app.menu.component';
import {AppMenuitemComponent} from './app.menuitem.component';
import {AppTopBarComponent} from './app.topbar.component';
import {AppSearchComponent} from './app.search.component';
import {AppFooterComponent} from './app.footer.component';
import {DashboardDemoComponent} from './components/dashboards/dashboarddemo.component';
import {FormLayoutDemoComponent} from './components/uikit/formlayout/formlayoutdemo.component';
import {FloatLabelDemoComponent} from './components/uikit/floatlabel/floatlabeldemo.component';
import {InvalidStateDemoComponent} from './components/uikit/invalid/invalidstatedemo.component';
import {InputDemoComponent} from './components/uikit/input/inputdemo.component';
import {ButtonDemoComponent} from './components/uikit/button/buttondemo.component';
import {TableDemoComponent} from './components/uikit/table/tabledemo.component';
import {ListDemoComponent} from './components/uikit/list/listdemo.component';
import {TreeDemoComponent} from './components/uikit/tree/treedemo.component';
import {PanelsDemoComponent} from './components/uikit/panels/panelsdemo.component';
import {OverlaysDemoComponent} from './components/uikit/overlays/overlaysdemo.component';
import {MediaDemoComponent} from './components/uikit/media/mediademo.component';
import {MenusComponent} from './components/uikit//menus/menus.component';
import {MessagesDemoComponent} from './components/uikit/messages/messagesdemo.component';
import {MiscDemoComponent} from './components/uikit/misc/miscdemo.component';
import {ChartsDemoComponent} from './components/uikit/charts/chartsdemo.component';
import {FileDemoComponent} from './components/uikit/file/filedemo.component';
import {DocumentationComponent} from './components/start/documentation/documentation.component';
import {IconsComponent} from './components/utilities/icons.component';
import {AppCrudComponent} from './components/pages/crud/app.crud.component';
import {AppCalendarComponent} from './components/pages/calendar/app.calendar.component';
import {AppInvoiceComponent} from './components/pages/invoice/app.invoice.component';
import {AppHelpComponent} from './components/pages/help/app.help.component';
import {AppNotfoundComponent} from './components/pages/notfound/app.notfound.component';
import {AppErrorComponent} from './components/pages/error/app.error.component';
import {AppAccessdeniedComponent} from './components/pages/accessdenied/app.accessdenied.component';
import {AppTimelineDemoComponent} from './components/pages/timeline/app.timelinedemo.component';
import {EmptyDemoComponent} from './components/pages/empty/emptydemo.component';
import {AppLoginComponent} from './components/pages/login/app.login.component';
import {BlocksComponent} from './components/primeblocks/blocks/blocks.component';
import {BlockViewer} from './components/primeblocks/blockviewer/blockviewer.component';

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

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

FullCalendarModule.registerPlugins([
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin
]);

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AccordionModule,
        AutoCompleteModule,
        AvatarModule,
        AvatarGroupModule,
        BadgeModule,
        BreadcrumbModule,
        ButtonModule,
        CalendarModule,
        CardModule,
        CarouselModule,
        CascadeSelectModule,
        ChartModule,
        CheckboxModule,
        ChipModule,
        ChipsModule,
        CodeHighlighterModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        ColorPickerModule,
        ContextMenuModule,
        DataViewModule,
        DialogModule,
        DividerModule,
        DropdownModule,
        FieldsetModule,
        FileUploadModule,
        FullCalendarModule,
        GalleriaModule,
        ImageModule,
        InplaceModule,
        InputNumberModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        KnobModule,
        LightboxModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OrganizationChartModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        RippleModule,
        ScrollPanelModule,
        ScrollTopModule,
        SelectButtonModule,
        SidebarModule,
        SkeletonModule,
        SlideMenuModule,
        SliderModule,
        SplitButtonModule,
        SplitterModule,
        StepsModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        TagModule,
        TerminalModule,
        TimelineModule,
        TieredMenuModule,
        ToastModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        TreeTableModule,
        VirtualScrollerModule,
        AppCodeModule
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
        DashboardDemoComponent,
        FormLayoutDemoComponent,
        FloatLabelDemoComponent,
        InvalidStateDemoComponent,
        InputDemoComponent,
        ButtonDemoComponent,
        TableDemoComponent,
        ListDemoComponent,
        TreeDemoComponent,
        PanelsDemoComponent,
        OverlaysDemoComponent,
        MediaDemoComponent,
        MenusComponent,
        MessagesDemoComponent,
        MessagesDemoComponent,
        MiscDemoComponent,
        ChartsDemoComponent,
        EmptyDemoComponent,
        FileDemoComponent,
        DocumentationComponent,
        IconsComponent,
        AppCrudComponent,
        AppCalendarComponent,
        AppLoginComponent,
        AppInvoiceComponent,
        AppHelpComponent,
        AppNotfoundComponent,
        AppErrorComponent,
        AppTimelineDemoComponent,
        AppAccessdeniedComponent,
        BlockViewer,
        BlocksComponent
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
