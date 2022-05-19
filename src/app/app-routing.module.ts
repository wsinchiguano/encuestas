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
                    {path: 'profile', loadChildren: () => import('./components/profile/profile.module').then(m => m.ProfileModule)},
                    {path: 'documentation', loadChildren: () => import('./components/start/start.module').then(m => m.StartModule)},
                    {path: 'blocks', loadChildren: () => import('./components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule)},
                    {path: 'ecommerce', loadChildren: () => import('./components/ecommerce/app.ecommerce.module').then(m => m.AppEcommerceModule)},
                    {path: 'blog', loadChildren: () => import('./components/apps/blog/blog.module').then(m => m.BlogModule)},
                    {path: 'ecommerce-admin', loadChildren: () => import('./components/ecommerce-admin/app.ecommerce-admin.module').then(m => m.AppEcommerceAdminModule)},
                    {path: 'apps', loadChildren: () => import('./components/apps/apps.module').then(m => m.AppsModule)},


                ]
            },
            {path: 'error', loadChildren: () => import('./components/pages/error/app.error.module').then(m => m.AppErrorModule)},
            {path: 'access', loadChildren: () => import('./components/pages/accessdenied/app.accessdenied.module').then(m => m.AppAccessdeniedModule)},
            {path: 'login', loadChildren: () => import('./components/pages/login/app.login.module').then(m => m.AppLoginModule)},
            {path: 'forgotpassword', loadChildren: () => import('./components/pages/forgotpassword/app.forgotpassword.module').then(m => m.AppForgotPasswordModule)},
            {path: 'register', loadChildren: () => import('./components/pages/register/app.register.module').then(m => m.AppRegisterModule)},
            {path: 'newpassword', loadChildren: () => import('./components/pages/newpassword/app.newpassword.module').then(m => m.AppNewPasswordModule)},
            {path: 'emailverification', loadChildren: () => import('./components/pages/emailverification/app.emailverification.module').then(m => m.AppEmailverificationModule)},
            {path: 'twostepverification', loadChildren: () => import('./components/pages/two-stepverification/app.twostepverification.module').then(m => m.AppTwoStepVerificationModule)},
            {path: 'lockscreen', loadChildren: () => import('./components/pages/lockscreen/app.lockscreen.module').then(m => m.AppLockScreenModule)},
            {path: 'notfound', loadChildren: () => import('./components/pages/notfound/app.notfound.module').then(m => m.AppNotfoundModule)},
            {path: '**', redirectTo: '/notfound'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
