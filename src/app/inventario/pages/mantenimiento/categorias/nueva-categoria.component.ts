import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriasService } from 'src/app/inventario/services/categorias.service';
import { MensajesService } from 'src/shared/helpers/mensajes.service';
import { TextosService } from 'src/shared/helpers/textos.service';

@Component({
  selector: 'app-nueva-categoria',
  templateUrl: './nueva-categoria.component.html'
})
export class NuevaCategoriaComponent implements OnInit {
  public categoriasService = inject(CategoriasService);
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private mensajesService = inject(MensajesService);
  private textosService = inject(TextosService)

  frmCategoria: FormGroup = this.fb.group({
    nombre: [,],
    estado: [,],
  });

  itemsEstado: any[] = [
    { label: 'ACTIVO', value: 'A' },
    { label: 'BAJA', value: 'B' },
    // Agrega más opciones según tus necesidades
  ];


  constructor() { }
  ngOnInit(): void {
    this.frmCategoria
      .get('nombre')
      ?.setValue(
        this.categoriasService.categoriaEditSignal()?.nombre_categoria);
    this.frmCategoria
      .get('estado')
      ?.setValue(
        this.categoriasService.categoriaEditSignal()?.estado_categoria);
  }

  //metodos
  regresar() {
    this.frmCategoria.reset();
    this.router.navigate(['/inventario/categorias']);
  }

  guardar() {
    const { nombre, estado } = this.frmCategoria.value;
    //validamos q ingresen los campos
    if (!nombre || !estado || nombre.trim() == '') {
      this.mensajesService.msgs(
        'Advertencia!',
        'Ingresar los campos requeridos',
        'warning',
        'OK'
      );
      return;
    }

    if (this.categoriasService.esNuevaCategoriaSignal()) {
      this.categoriasService.guardar(nombre)
    }
    else {
      this.categoriasService.actualizar(nombre, estado);
    }


  }

  changeTextToUppercase(field: string) {
    this.textosService.changeTextToUppercase(this.frmCategoria, field);
  }

}
