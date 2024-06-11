import { Component, Input, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PreguntaInterface, SeccionInterface } from 'src/app/encuestas/interfaces/encuestas.interface';
import { CrearEncuestaService } from 'src/app/encuestas/services/crear-encuesta.service';
import { MensajesService } from 'src/shared/helpers/mensajes.service';

@Component({
  selector: 'app-seccion-list-encuesta',
  templateUrl: './seccion-list-encuesta.component.html',
  styleUrls: ['./seccion-list-encuesta.component.scss']

})
export class SeccionListEncuestaComponent {
  private mensajesService = inject(MensajesService);
  private fb = inject(FormBuilder);
  public crearEncuestaService = inject(CrearEncuestaService);

  @Input() seccion!: SeccionInterface;

  public visible: boolean = false;
  public visibleTipoPregunta: boolean = false;
  public preguntaSelected: PreguntaInterface = { pre_nombre: 'ingresar pregunta', pre_id: 0, pre_uuid: '121212', pre_tipo: 'undefin', opciones: [] };


  frmTipoPregunta: FormGroup = this.fb.group({
    tipoPregunta: [,],
  });


  itemsEstado: any[] = [
    { label: 'Opcion', value: 'O' },
    { label: 'Texto', value: 'T' },
    // Agrega más opciones según tus necesidades
  ];

  eliminarSeccion(seccion: SeccionInterface) {

    // Encuentra el índice de la sección que deseas eliminar
    let indiceSeccionAEliminar = this.crearEncuestaService.seccionListSignal().findIndex(item => seccion.sec_uuid === item.sec_uuid);

    // Verifica si se encontró la sección
    if (indiceSeccionAEliminar !== -1) {
      //TODO: PONER  UN MENSAJE QUE SI DESEA ELIMINAR DESEA CONTINUAR SI/NO
      // Utiliza el método splice para eliminar la sección del arreglo
      this.crearEncuestaService.seccionListSignal().splice(indiceSeccionAEliminar, 1);
      console.log(`Sección con id ${indiceSeccionAEliminar} eliminada correctamente.`);
    } else {
      console.log(`No se encontró ninguna sección con id ${indiceSeccionAEliminar}.`);
    }
  }

  mostrarTipoPregunta() {
    this.visibleTipoPregunta = true;
  }

  agregarPregunta() {

    const { tipoPregunta } = this.frmTipoPregunta.value;
    //validamos q ingresen los campos
    if (!tipoPregunta) {
      this.visibleTipoPregunta = false;
      this.mensajesService.msgs(
        'Advertencia!',
        'Ingresar los campos requeridos',
        'warning',
        'OK'
      );
      return;
    }

   

    this.seccion.preguntas.push({
      pre_uuid: this.getUniqueId(10),
      pre_nombre: 'una pregunta',
      pre_id: 1,
      pre_tipo: tipoPregunta,
      opciones: [],
    });

    this.visibleTipoPregunta = false;



    //console.log(this.seccion);

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

  onPreguntaClick(event: Event, pregunta: PreguntaInterface) {
    //console.log(pregunta);
    this.visible = true;
    this.preguntaSelected = pregunta;
    //this.crearEncuestaService.preguntaEditarSignal.set(pregunta);
  }

}
