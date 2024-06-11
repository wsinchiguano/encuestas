import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuestadosComponent } from './pages/mantenimiento/encuestados/encuestados.component';
import { EditEncuestadoComponent } from './pages/mantenimiento/encuestados/edit-encuestado.component';
import { AsignEncuestadoComponent } from './pages/mantenimiento/encuestados/asign-encuestado.component';
import { IngresarEncuestaComponent } from './pages/procesos/ingresar-encuesta/ingresar-encuesta.component';
import { EncuestaComponent } from './pages/procesos/ingresar-encuesta/encuesta.component';
import { CargosComponent } from './pages/mantenimiento/cargos/cargos.component';
import { EditCargoComponent } from './pages/mantenimiento/cargos/edit-cargo.component';
import { AdmEncuestaComponent } from './pages/procesos/adm-encuesta/adm-encuesta.component';
import { CrearEncuestaComponent } from './pages/procesos/crear-encuesta/crear-encuesta.component';
import { GrupoEncuestasComponent } from './pages/procesos/grupo-encuestas/grupo-encuestas.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'encuestados',
                data: { breadcrumb: 'ENCUESTAS/ENCUESTADOS' },
                component: EncuestadosComponent,
            },
            {
                path: 'edit-encuestado',
                data: { breadcrumb: 'ENCUESTAS/ENCUESTADOS' },
                component: EditEncuestadoComponent,
            },
            {
                path: 'asign-encuestado',
                data: { breadcrumb: 'ENCUESTAS/ENCUESTADOS' },
                component: AsignEncuestadoComponent,
            },
            {
                path: 'ingresar-encuesta',
                data: { breadcrumb: 'ENCUESTAS/INGRESAR-ENCUESTA' },
                component: IngresarEncuestaComponent,
            },
            {
                path: 'adm-grupo',
                data: { breadcrumb: 'ENCUESTAS/GRUPO-ENCUESTA' },
                component: GrupoEncuestasComponent,
            },
            {
                path: 'encuesta',
                data: { breadcrumb: 'ENCUESTAS/CREAR-ENCUESTA' },
                component: CrearEncuestaComponent,
            },
            {
                path: 'encuesta',
                data: { breadcrumb: 'ENCUESTAS/INGRESAR-ENCUESTA' },
                component: EncuestaComponent,
            },
            {
                path: 'cargos',
                data: { breadcrumb: 'CARGOS/INGRESAR-CARGO' },
                component: CargosComponent,
            },
            {
                path: 'edit-cargo',
                data: { breadcrumb: 'CARGOS/INGRESAR-CARGO' },
                component: EditCargoComponent,
            },

            { path: '**', redirectTo: 'ingresar-encuesta' },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EncuestasRoutingModule {}
