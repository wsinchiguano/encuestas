import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrearEncuestaService } from 'src/app/encuestas/services/crear-encuesta.service';
import { MensajesService } from 'src/shared/helpers/mensajes.service';


@Component({
  selector: 'app-pregunta-encuesta',
  templateUrl: './pregunta-encuesta.component.html',
  styleUrls: ['./pregunta-encuesta.component.scss']

})
export class PreguntaEncuestaComponent implements OnInit {

  private fb = inject(FormBuilder);
  private mensajesService = inject(MensajesService);
  public crearEncuestaService = inject(CrearEncuestaService);

  //FORMULARIOS
  frmEncabezado: FormGroup = this.fb.group({
    encabezado: [, [Validators.required]],
  });

  constructor() {
  }


  ngOnInit(): void {

    this.frmEncabezado.reset();
    this.frmEncabezado
      .get('encabezado')
      ?.setValue(this.crearEncuestaService.formularioSelectedSignal()?.enc_descripcion);
  }

  addSeccion() {
    this.crearEncuestaService.seccionListSignal().push({
      sec_uuid: this.getUniqueId(10),
      sec_nombre: "SECCION NUEVA",
      sec_id: 0,
      preguntas: [
      ]
    })

    this.frmEncabezado.reset();
    this.frmEncabezado
      .get('encabezado')
      ?.setValue(this.crearEncuestaService.formularioSelectedSignal()?.enc_descripcion);
    //console.log(this.crearEncuestaService.seccionListSignal())
  }

  saveSeccionPreguntasOpciones() {
    const { encabezado } = this.frmEncabezado.value;

    if (!encabezado || encabezado.trim() == '') {
      this.mensajesService.msgs(
        'Advertencia!',
        'Ingresar los campos requeridos',
        'warning',
        'OK'
      );
      return;
    }

    this.crearEncuestaService.saveSeccionesPreguntasOpciones(encabezado);
  }

  getUniqueId(parts: number): string {
    const stringArr = [];
    for (let i = 0; i < parts; i++) {
      // tslint:disable-next-line:no-bitwise
      const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      stringArr.push(S4);
    }
    return stringArr.join('-');
  }
}
