import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { ValidarTokenGuard } from './auth/guards/validar-token.guard';
import { IngresarEncuestaComponent } from './encuestas/pages/procesos/ingresar-encuesta/ingresar-encuesta.component';

const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled'
};

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'inicio', component: AppLayoutComponent,
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [ValidarTokenGuard],
        canLoad: [ValidarTokenGuard]
    },
    {
        path: 'seguridades', component: AppLayoutComponent,
        loadChildren: () => import('./seguridades/seguridades.module').then(m => m.SeguridadesModule),
        canActivate: [ValidarTokenGuard],
        canLoad: [ValidarTokenGuard]
    },
    {
        path: 'encuestas', component: AppLayoutComponent,
        loadChildren: () => import('./encuestas/encuestas.module').then(m => m.EncuestasModule),
        canActivate: [ValidarTokenGuard],
        canLoad: [ValidarTokenGuard]
    },
    
    {
        path: 'ingresarFormulario', 
        loadChildren: () => import('./ingresar-formulario/ingresar-formulario.module').then(m => m.IngresarFormularioModule)
    },

    {
        path: '**',
        redirectTo: 'inicio',
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
