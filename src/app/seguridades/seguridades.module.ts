import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadesRoutingModule } from './seguridades-routing.module';
import { UsuariosComponent } from './pages/mantenimiento/usuarios/usuarios.component';


@NgModule({
  declarations: [
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    SeguridadesRoutingModule
  ]
})
export class SeguridadesModule { }
