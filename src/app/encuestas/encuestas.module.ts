import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncuestasRoutingModule } from './encuestas-routing.module';
import { EncuestadosComponent } from './pages/mantenimiento/encuestados/encuestados.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppConfigModule } from '../layout/config/app.config.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { EditEncuestadoComponent } from './pages/mantenimiento/encuestados/edit-encuestado.component';
import { AsignEncuestadoComponent } from './pages/mantenimiento/encuestados/asign-encuestado.component';
import { IngresarEncuestaComponent } from './pages/procesos/ingresar-encuesta/ingresar-encuesta.component';
import { EncuestaComponent } from './pages/procesos/ingresar-encuesta/encuesta.component';
import { CargosComponent } from './pages/mantenimiento/cargos/cargos.component';
import { EditCargoComponent } from './pages/mantenimiento/cargos/edit-cargo.component';
import { AdmEncuestaComponent } from './pages/procesos/adm-encuesta/adm-encuesta.component';
import { CrearEncuestaComponent } from './pages/procesos/crear-encuesta/crear-encuesta.component';
import { ConsultarEncuestaComponent } from './pages/procesos/crear-encuesta/consultar-encuesta.component';
import { PreguntaEncuestaComponent } from './pages/procesos/crear-encuesta/pregunta-encuesta.component';
import { SeccionListEncuestaComponent } from './pages/procesos/crear-encuesta/seccion-list-encuesta.component';
import { CrearPreguntaRespuestaEncuestaComponent } from './pages/procesos/crear-encuesta/crear-pregunta-respuesta-encuesta.component';
import { EditarPreguntaComponent } from './pages/procesos/crear-encuesta/editar-pregunta.component';
import { GrupoEncuestasComponent } from './pages/procesos/grupo-encuestas/grupo-encuestas.component';
import { ConsultaGrupoEncuestasComponent } from './pages/procesos/grupo-encuestas/consulta-grupo-encuestas.component';
import { EncuestadosGrupoEncuestasComponent } from './pages/procesos/grupo-encuestas/encuestados-grupo-encuestas.component';
import { CargosFormulariosGrupoEncuestasComponent } from './pages/procesos/grupo-encuestas/cargos-formularios-grupo-encuestas.component';
import { MallaGrupoEncuestasComponent } from './pages/procesos/grupo-encuestas/malla-grupo-encuestas.component';
import { PlantillaEmailGrupoEncuestasComponent } from './pages/procesos/grupo-encuestas/plantilla-email-grupo-encuestas.component';


@NgModule({
  declarations: [
    EncuestadosComponent,
    EditEncuestadoComponent,
    AsignEncuestadoComponent,
    IngresarEncuestaComponent,
    EncuestaComponent,
    CargosComponent,
    EditCargoComponent,
    AdmEncuestaComponent,
    CrearEncuestaComponent,
    ConsultarEncuestaComponent,
    PreguntaEncuestaComponent,
    SeccionListEncuestaComponent,
    CrearPreguntaRespuestaEncuestaComponent,
    EditarPreguntaComponent,
    GrupoEncuestasComponent,
    ConsultaGrupoEncuestasComponent,
    EncuestadosGrupoEncuestasComponent,
    CargosFormulariosGrupoEncuestasComponent,
    MallaGrupoEncuestasComponent,
    PlantillaEmailGrupoEncuestasComponent
  ],
  imports: [
    CommonModule,
    EncuestasRoutingModule,
    AppConfigModule,
    PrimeNgModule,
    ReactiveFormsModule,
  ]
})
export class EncuestasModule { }
