import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppLayoutComponent} from './app.layout.component';
import {DashboardDemoComponent} from './components/dashboards/dashboarddemo.component';
import {FormLayoutDemoComponent} from './components/uikit/formlayout/formlayoutdemo.component';
import {FloatLabelDemoComponent} from './components/uikit/floatlabel/floatlabeldemo.component';
import {InvalidStateDemoComponent} from './components/uikit/invalid/invalidstatedemo.component';
import {PanelsDemoComponent} from './components/uikit/panels/panelsdemo.component';
import {OverlaysDemoComponent} from './components/uikit/overlays/overlaysdemo.component';
import {MediaDemoComponent} from './components/uikit/media/mediademo.component';
import {MessagesDemoComponent} from './components/uikit/messages/messagesdemo.component';
import {MiscDemoComponent} from './components/uikit/misc/miscdemo.component';
import {ChartsDemoComponent} from './components/uikit/charts/chartsdemo.component';
import {FileDemoComponent} from './components/uikit/file/filedemo.component';
import {InputDemoComponent} from './components/uikit/input/inputdemo.component';
import {ButtonDemoComponent} from './components/uikit/button/buttondemo.component';
import {TableDemoComponent} from './components/uikit/table/tabledemo.component';
import {ListDemoComponent} from './components/uikit/list/listdemo.component';
import {TreeDemoComponent} from './components/uikit/tree/treedemo.component';
import {DocumentationComponent} from './components/start/documentation/documentation.component';
import {AppNotfoundComponent} from './components/pages/notfound/app.notfound.component';
import {EmptyDemoComponent} from './components/pages/empty/emptydemo.component';
import {AppErrorComponent} from './components/pages/error/app.error.component';
import {AppAccessdeniedComponent} from './components/pages/accessdenied/app.accessdenied.component';
import {AppLoginComponent} from './components/pages/login/app.login.component';
import {AppTimelineDemoComponent} from './components/pages/timeline/app.timelinedemo.component';
import {AppCrudComponent} from './components/pages/crud/app.crud.component';
import {AppCalendarComponent} from './components/pages/calendar/app.calendar.component';
import {AppInvoiceComponent} from './components/pages/invoice/app.invoice.component';
import {AppHelpComponent} from './components/pages/help/app.help.component';
import {IconsComponent} from './components/utilities/icons.component';
import {BlocksComponent} from './components/primeblocks/blocks/blocks.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    {path: '', component: DashboardDemoComponent},
                    {path: 'uikit/formlayout', component: FormLayoutDemoComponent},
                    {path: 'uikit/floatlabel', component: FloatLabelDemoComponent},
                    {path: 'uikit/invalidstate', component: InvalidStateDemoComponent},
                    {path: 'uikit/input', component: InputDemoComponent},
                    {path: 'uikit/button', component: ButtonDemoComponent},
                    {path: 'uikit/table', component: TableDemoComponent},
                    {path: 'uikit/list', component: ListDemoComponent},
                    {path: 'uikit/tree', component: TreeDemoComponent},
                    {path: 'uikit/panel', component: PanelsDemoComponent},
                    {path: 'uikit/overlay', component: OverlaysDemoComponent},
                    {path: 'uikit/menu', loadChildren: () => import('./components/uikit/menus/menus.module').then(m => m.MenusModule)},
                    {path: 'uikit/media', component: MediaDemoComponent},
                    {path: 'uikit/message', component: MessagesDemoComponent},
                    {path: 'uikit/misc', component: MiscDemoComponent},
                    {path: 'uikit/charts', component: ChartsDemoComponent},
                    {path: 'uikit/file', component: FileDemoComponent},
                    {path: 'utilities/icons', component: IconsComponent},
                    {path: 'pages/crud', component: AppCrudComponent},
                    {path: 'pages/calendar', component: AppCalendarComponent},
                    {path: 'pages/timeline', component: AppTimelineDemoComponent},
                    {path: 'pages/invoice', component: AppInvoiceComponent},
                    {path: 'pages/help', component: AppHelpComponent},
                    {path: 'pages/empty', component: EmptyDemoComponent},
                    {path: 'documentation', component: DocumentationComponent},
                    {path: 'blocks', component: BlocksComponent}
                ]
            },
            {path: 'error', component: AppErrorComponent},
            {path: 'access', component: AppAccessdeniedComponent},
            {path: 'notfound', component: AppNotfoundComponent},
            {path: 'login', component: AppLoginComponent},
            {path: '**', redirectTo: '/notfound'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
