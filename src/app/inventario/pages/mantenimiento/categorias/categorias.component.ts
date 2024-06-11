import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CategoriaInterface } from 'src/app/inventario/interfaces/inventario.interface';
import { CategoriasService } from 'src/app/inventario/services/categorias.service';
import { InventarioService } from 'src/app/inventario/services/inventario.service';
import { AppService } from 'src/app/services/app.service';
import { MensajesService } from 'src/shared/helpers/mensajes.service';
import { TextosService } from 'src/shared/helpers/textos.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html'
})
export class CategoriasComponent {

  public categoriasService = inject(CategoriasService);
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private appService = inject(AppService);
  private mensajesService = inject(MensajesService);
  private authService = inject(AuthService);
  private textosService = inject(TextosService);

  //FORMULARIOS
  frmBusqueda: FormGroup = this.fb.group({
    catalogo: [, [Validators.required]],
  });

  constructor(

  ) { }

  consultar() {
    const { catalogo } = this.frmBusqueda.value;

    let argumento = '%';
    if (catalogo) {
      argumento = catalogo;
    }

    this.categoriasService.getCategorias(argumento);

  }

  limpiar() {
    this.categoriasService.categoriaListSignal.set([]);
    this.frmBusqueda.reset();
  }

  nueva() {
    this.categoriasService.nombreTituloSignal.set('NUEVO CATALOGO');
    this.categoriasService.esNuevaCategoriaSignal.set(true);
    this.categoriasService.categoriaEditSignal.set(undefined);
    this.router.navigate(['/inventario/nuevaCategoria']);
  }

  editar(item: CategoriaInterface) {
    this.categoriasService.nombreTituloSignal.set('EDITAR CATALOGO');
    this.categoriasService.categoriaEditSignal.set(item);
    this.router.navigate(['/inventario/nuevaCategoria']);

  }
}
