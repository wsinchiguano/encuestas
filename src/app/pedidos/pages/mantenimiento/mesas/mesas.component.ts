import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MesasInterface } from 'src/app/pedidos/interfaces/pedidos.interface';
import { MesasService } from 'src/app/pedidos/services/mesas.service';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html'
})
export class MesasComponent {
  public mesasService = inject(MesasService);
  private fb = inject(FormBuilder);
  private router = inject(Router);
  //FORMULARIOS
  frmBusqueda: FormGroup = this.fb.group({
    filtro: [, [Validators.required]],
  });

  consultar() {
    const { filtro } = this.frmBusqueda.value;

    let argumento = '%';
    if (filtro) {
      argumento = filtro;
    }

    this.mesasService.getMesas(argumento);
  }
  nueva() {
    this.mesasService.nombreTituloSignal.set('NUEVA MESA');
    this.mesasService.esNuevaMesaSignal.set(true);
    this.mesasService.mesaEditSignal.set(undefined);
    this.router.navigate(['/pedidos/nuevaMesa']);
  }
  limpiar() {
    this.mesasService.mesasListSignal.set([]);
    this.frmBusqueda.reset();
  }
  editar(item: MesasInterface) {
    this.mesasService.nombreTituloSignal.set('EDITAR MESA');
    this.mesasService.esNuevaMesaSignal.set(false);
    this.mesasService.mesaEditSignal.set(item);
    this.router.navigate(['/pedidos/nuevaMesa']);
  }

}
