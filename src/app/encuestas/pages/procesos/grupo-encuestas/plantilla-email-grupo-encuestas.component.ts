import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GrupoEncuestasService } from 'src/app/encuestas/services/grupo-encuestas.service';
import { MensajesService } from 'src/shared/helpers/mensajes.service';

@Component({
  selector: 'app-plantilla-email-grupo-encuestas',
  templateUrl: './plantilla-email-grupo-encuestas.component.html',
  styleUrls: ['./plantilla-email-grupo-encuestas.component.scss']
})
export class PlantillaEmailGrupoEncuestasComponent {

  public grupoEncuestasService = inject(GrupoEncuestasService);
  private fb = inject(FormBuilder);
  private mensajesService = inject(MensajesService);

  frmPlantillaEmail: FormGroup = this.fb.group({
    asuntoEmail: [, [Validators.required]],
    cuerpoEmail: [, [Validators.required]],
  });

  async enviarEncuesta() {
    const { asuntoEmail, cuerpoEmail } = this.frmPlantillaEmail.value;

    if (!asuntoEmail || asuntoEmail.trim() == '') {
      this.mensajesService.msgs(
        'Advertencia!',
        'Ingresar asunto en la plantilla del correo',
        'warning',
        'OK'
      );
      return;
    }
    if (!cuerpoEmail || cuerpoEmail.trim() == '') {
      this.mensajesService.msgs(
        'Advertencia!',
        'Ingresar mensaje en la plantilla del correo',
        'warning',
        'OK'
      );
      return;
    }

    let resultado = await this.grupoEncuestasService.savePlantillaEmail(asuntoEmail, cuerpoEmail);
    //redirigue al primer tab
    if (resultado == 1) {
      //enviamos a crear el grupo de encuestas y tablas temporales
      let resultadoCrearEncuesta = await this.grupoEncuestasService.inicializaEncuesta();

      if (resultadoCrearEncuesta == 1) {
        this.grupoEncuestasService.indexTabSignal.set(0);
        this.grupoEncuestasService.estadoTabsSignal.set([true, true, true, true]);

        let arg = this.grupoEncuestasService.grupoEncuestasSelectedSignal()?.gru_nombre;
        if (arg == undefined) {
          arg = '';
        }
        this.grupoEncuestasService.getGrupoEncuestas(arg);
      }

    }

  }
}
