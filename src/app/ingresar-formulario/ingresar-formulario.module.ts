import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngresarFormularioRoutingModule } from './ingresar-formulario-routing.module';
import { IngresarFormularioComponent } from './pages/procesos/ingresar-formulario/ingresar-formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppConfigModule } from '../layout/config/app.config.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { DefaultIngresarFormularioComponent } from './pages/procesos/ingresar-formulario/default-ingresar-formulario.component';
import { ContestarFormularioComponent } from './pages/procesos/ingresar-formulario/contestar-formulario.component';


@NgModule({
  declarations: [
    IngresarFormularioComponent,
    DefaultIngresarFormularioComponent,
    ContestarFormularioComponent
  ],
  imports: [
    CommonModule,
    IngresarFormularioRoutingModule,
    AppConfigModule,
    CommonModule,
    PrimeNgModule,
    ReactiveFormsModule,
  ]
})
export class IngresarFormularioModule { }
