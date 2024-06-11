import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarFormularioComponent } from './pages/procesos/ingresar-formulario/ingresar-formulario.component';
import { DefaultIngresarFormularioComponent } from './pages/procesos/ingresar-formulario/default-ingresar-formulario.component';
import { ContestarFormularioComponent } from './pages/procesos/ingresar-formulario/contestar-formulario.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: ':uuid', component: IngresarFormularioComponent },
      { path: 'default', component: DefaultIngresarFormularioComponent },
      { path: ':uuid/contestar-formulario', component: ContestarFormularioComponent },
      { path: '**', redirectTo: 'default' },
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngresarFormularioRoutingModule { }
