import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormularioInterface } from 'src/app/encuestas/interfaces/encuestas.interface';
import { CrearEncuestaService } from 'src/app/encuestas/services/crear-encuesta.service';
import { MensajesService } from 'src/shared/helpers/mensajes.service';

@Component({
  selector: 'app-consultar-encuesta',
  templateUrl: './consultar-encuesta.component.html'
})
export class ConsultarEncuestaComponent {
  private fb = inject(FormBuilder);
  private mensajesService = inject(MensajesService);

  public crearEncuestaService = inject(CrearEncuestaService);

  dlgNuevoFormularioVisible: boolean = false;
  dlgEditarFormularioVisible: boolean = false;

  //FORMULARIOS
  frmBusqueda: FormGroup = this.fb.group({
    formulario: [, [Validators.required]],
  });
  frmEditarFormulario: FormGroup = this.fb.group({
    txtNombreFormulario: [, [Validators.required]],
    estado: [, [Validators.required]],
  });

  frmNuevoFormulario: FormGroup = this.fb.group({
    txtNombreFormulario: [, [Validators.required]],
  });

  itemsEstado: any[] = [
    { label: 'ACTIVO', value: 'A' },
    { label: 'BAJA', value: 'B' },
    // Agrega más opciones según tus necesidades
  ];

  //formulario selected
  formularioSelected!: FormularioInterface;


  buscar() {
    const { formulario } = this.frmBusqueda.value;
    let argumento = '%';
    if (formulario) {
      argumento = formulario;
    }

    this.crearEncuestaService.getFromularios(argumento);

  }

  reset() {
    this.frmBusqueda.reset();
    this.crearEncuestaService.formulariosListSignal.set([]);
    this.crearEncuestaService.estadoTabsSignal.set([true]);

  }

  selectFormulario(item: FormularioInterface) {
    this.crearEncuestaService.formularioSelectedSignal.set(item);
    this.crearEncuestaService.indexTabSignal.set(1);
    this.crearEncuestaService.estadoTabsSignal.set([false]);
    this.crearEncuestaService.setSecciones(item);
    // console.log(item);
  }

  mostrarDlgNuevoMormulario() {
    this.frmNuevoFormulario.reset();
    this.dlgNuevoFormularioVisible = true;
  }

  guardarDlgNuevoFormulario() {
    const { txtNombreFormulario } = this.frmNuevoFormulario.value;

    if (!txtNombreFormulario || txtNombreFormulario.trim() == '') {
      this.dlgNuevoFormularioVisible = false;
      this.mensajesService.msgs(
        'Advertencia!',
        'Ingresar los campos requeridos',
        'warning',
        'OK'
      );
      return;
    }
    this.dlgNuevoFormularioVisible = false;
    this.crearEncuestaService.saveFromularios(txtNombreFormulario, 1);
  }

  verEditarDlgFormulario(item: FormularioInterface) {

    this.frmEditarFormulario
      .get('txtNombreFormulario')
      ?.setValue(item.enc_nombre);

    this.frmEditarFormulario
      .get('estado')
      ?.setValue(item.enc_estado);

    this.formularioSelected = item;

    this.dlgEditarFormularioVisible = true;

  }

  editarDlgFormulario() {
    const { txtNombreFormulario, estado } = this.frmEditarFormulario.value;
    if (!txtNombreFormulario || txtNombreFormulario.trim() == '') {
      this.dlgEditarFormularioVisible = false;
      this.mensajesService.msgs(
        'Advertencia!',
        'Ingresar los campos requeridos',
        'warning',
        'OK'
      );
      return;
    }
    this.dlgEditarFormularioVisible = false;
    this.crearEncuestaService.editFromularios(txtNombreFormulario, this.formularioSelected.enc_id, estado);
  }

  cloneFormulario(item: FormularioInterface) {
    this.crearEncuestaService.saveFromularios(`${item.enc_nombre} copia`, 1);
  }


}
