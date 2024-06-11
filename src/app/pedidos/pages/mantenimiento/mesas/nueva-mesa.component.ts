import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MesasService } from 'src/app/pedidos/services/mesas.service';
import { MensajesService } from 'src/shared/helpers/mensajes.service';
import { TextosService } from 'src/shared/helpers/textos.service';

@Component({
  selector: 'app-nueva-mesa',
  templateUrl: './nueva-mesa.component.html'
})
export class NuevaMesaComponent {
  public mesaService = inject(MesasService);
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private mensajesService = inject(MensajesService);
  private textosService = inject(TextosService)

  frmMesa: FormGroup = this.fb.group({
    nombre: [,],
    estado: [,],
  });

  itemsEstado: any[] = [
    { label: 'ACTIVO', value: 'A' },
    { label: 'BAJA', value: 'B' },
    // Agrega más opciones según tus necesidades
  ];

  ngOnInit(): void {
    this.frmMesa
      .get('nombre')
      ?.setValue(
        this.mesaService.mesaEditSignal()?.nombre_mesa);
    this.frmMesa
      .get('estado')
      ?.setValue(
        this.mesaService.mesaEditSignal()?.estado_mesa);
  }


  guardar() {
    const { nombre, estado } = this.frmMesa.value;
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
    if (this.mesaService.esNuevaMesaSignal()) {
      this.mesaService.guardar(nombre)
    }
    else {
      this.mesaService.actualizar(nombre, estado);
    }
  }

  regresar() {
    this.frmMesa.reset();
    this.router.navigate(['/pedidos/mesas']);
  }

  changeTextToUppercase(field: string) {
    this.textosService.changeTextToUppercase(this.frmMesa, field);
  }
}
