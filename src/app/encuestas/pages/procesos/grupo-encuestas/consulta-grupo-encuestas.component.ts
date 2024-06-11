import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { GrupoEncuestaInterface } from 'src/app/encuestas/interfaces/encuestas.interface';
import { GrupoEncuestasService } from 'src/app/encuestas/services/grupo-encuestas.service';
import { MensajesService } from 'src/shared/helpers/mensajes.service';

@Component({
  selector: 'app-consulta-grupo-encuestas',
  templateUrl: './consulta-grupo-encuestas.component.html',
  styleUrls: ['./consulta-grupo-encuestas.component.css'],
  providers: [ConfirmationService]
})
export class ConsultaGrupoEncuestasComponent {
  private fb = inject(FormBuilder);
  private mensajesService = inject(MensajesService);
  private confirmationService = inject(ConfirmationService);
  public grupoEncuestasService = inject(GrupoEncuestasService);

  //formularios
  frmBusqueda: FormGroup = this.fb.group({
    argumento: [, [Validators.required]]
  });


  //mostrar dialogos
  //mostrarDlgNuevoGrupo: boolean = false;


  pararGrupoEncuesta(event: Event, item: GrupoEncuestaInterface) {
    if (item.gru_estado == 'T') {
      this.mensajesService.msgs(
        'Advertencia!',
        'El grupo de encuestas esta terminado',
        'warning',
        'OK'
      );
      return;
    }

    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Esta seguro que desea terminar la encuesta?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: "none",
      rejectIcon: "none",
      rejectButtonStyleClass: "p-button-text",
      accept: () => {
        item.gru_estado = 'T';
      },
      reject: () => {
        //  console.log('reject');

      }
    });
  }

  buscar() {
    const { argumento } = this.frmBusqueda.value;
    let arg = '%';
    if (argumento) {
      arg = argumento;
    }
    this.grupoEncuestasService.getGrupoEncuestas(arg);

  }

  iniciarGrupoEncuesta(item: GrupoEncuestaInterface) {

    if (item.gru_estado == 'T') {
      this.mensajesService.msgs(
        'Advertencia!',
        'El grupo de encuestas esta terminado',
        'warning',
        'OK'
      );
      return;
    }



    item.gru_estado = 'I';
  }

  pausarGrupoEncuesta(item: GrupoEncuestaInterface) {
    item.gru_estado = 'P';

  }

  reset() {
    this.frmBusqueda.reset();
    this.grupoEncuestasService.grupoEncuestasListSignal.set([]);
    this.grupoEncuestasService.estadoTabsSignal.set([true, true, true, true]);
    this.grupoEncuestasService.plantillaExcel.set([]);
    this.grupoEncuestasService.cargoFormularioListSignal.set([]);
  }

  seleccionarGrupoEncuestas(item: GrupoEncuestaInterface) {
    if (item.gru_estado == 'P' ) { 
      this.grupoEncuestasService.indexTabSignal.set(1);
      this.grupoEncuestasService.estadoTabsSignal.set([false, true, true, true]);
      this.grupoEncuestasService.grupoEncuestasSelectedSignal.set(item);
    }
  }
  mostrarDlgNuevoGrupo() {

  }
}
