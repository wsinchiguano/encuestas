import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './pages/mantenimiento/categorias/categorias.component';
import { NuevaCategoriaComponent } from './pages/mantenimiento/categorias/nueva-categoria.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'categorias',
        data: { breadcrumb: 'INVENTARIO/CATEGORIAS' },
        component: CategoriasComponent,
      },
      {
        path: 'nuevaCategoria',
        data: { breadcrumb: '' },
        component: NuevaCategoriaComponent,
      },
     
      { path: '**', redirectTo: 'categorias' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule { }
