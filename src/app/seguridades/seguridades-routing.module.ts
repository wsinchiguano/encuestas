import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './pages/mantenimiento/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'usuarios',
        data: { breadcrumb: 'SEGURIDADES/USUARIOS' },
        component: UsuariosComponent,
      },


      { path: '**', redirectTo: 'usuarios' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadesRoutingModule { }
