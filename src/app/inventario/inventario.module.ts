import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { CategoriasComponent } from './pages/mantenimiento/categorias/categorias.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppConfigModule } from '../layout/config/app.config.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { NuevaCategoriaComponent } from './pages/mantenimiento/categorias/nueva-categoria.component';


@NgModule({
  declarations: [
    CategoriasComponent,
    NuevaCategoriaComponent
  ],
  imports: [
    CommonModule,
    InventarioRoutingModule,
    AppConfigModule,
    PrimeNgModule,
    ReactiveFormsModule,
  ]
})
export class InventarioModule { }
