import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesasComponent } from './pages/mantenimiento/mesas/mesas.component';
import { NuevaMesaComponent } from './pages/mantenimiento/mesas/nueva-mesa.component';
import { IngresarPedidosComponent } from './pages/procesos/ingresar-pedidos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'mesas',
        data: { breadcrumb: 'INVENTARIO/CATEGORIAS' },
        component: MesasComponent,
      },
      {
        path: 'nuevaMesa',
        data: { breadcrumb: '' },
        component: NuevaMesaComponent,
      },

      {
        path: 'ingresar-pedidos',
        data: { breadcrumb: 'INGRESAR PEDIDOS' },
        component: IngresarPedidosComponent,
      },
     
      { path: '**', redirectTo: 'mesas' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }
