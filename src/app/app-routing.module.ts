import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppLayoutComponent} from './app.layout.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    {path: '', loadChildren: () => import('./components/dashboards/dashboarddemo.module').then(m => m.DashboardDemoModule)},
                    {path: 'uikit', loadChildren: () => import('./components/uikit/uikit.module').then(m => m.UIkitModule)},
                    {path: 'utilities', loadChildren: () => import('./components/utilities/utilities.module').then(m => m.UtilitiesModule)},
                    {path: 'pages', loadChildren: () => import('./components/pages/pages.module').then(m => m.PagesModule)},
                    {path: 'documentation', loadChildren: () => import('./components/start/start.module').then(m => m.StartModule)},
                    {path: 'blocks', loadChildren: () => import('./components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule)},
                    {path: 'ecommerce', loadChildren: () => import('./components/ecommerce/app.ecommerce.module').then(m => m.AppEcommerceModule)},
                ]
            },
            {path: 'error', loadChildren: () => import('./components/pages/error/app.error.module').then(m => m.AppErrorModule)},
            {path: 'access', loadChildren: () => import('./components/pages/accessdenied/app.accessdenied.module').then(m => m.AppAccessdeniedModule)},
            {path: 'login', loadChildren: () => import('./components/pages/login/app.login.module').then(m => m.AppLoginModule)},
            {path: 'forgotpassword', loadChildren: () => import('./components/pages/forgotpassword/app.forgotpassword.module').then(m => m.AppForgotPasswordModule)},
            {path: 'notfound', loadChildren: () => import('./components/pages/notfound/app.notfound.module').then(m => m.AppNotfoundModule)},
            {path: '**', redirectTo: '/notfound'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
