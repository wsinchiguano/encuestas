import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppConfigModule } from '../layout/config/app.config.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MesasComponent } from './pages/mantenimiento/mesas/mesas.component';
import { NuevaMesaComponent } from './pages/mantenimiento/mesas/nueva-mesa.component';
import { IngresarPedidosComponent } from './pages/procesos/ingresar-pedidos.component';


@NgModule({
  declarations: [
    MesasComponent,
    NuevaMesaComponent,
    IngresarPedidosComponent
  ],
  imports: [
    CommonModule,
    PedidosRoutingModule,
    AppConfigModule,
    PrimeNgModule,
    ReactiveFormsModule,
  ]
})
export class PedidosModule { }
