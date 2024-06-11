import { Component, Input, inject } from '@angular/core';
import { PreguntaInterface, SeccionInterface } from 'src/app/encuestas/interfaces/encuestas.interface';
import { CrearEncuestaService } from 'src/app/encuestas/services/crear-encuesta.service';

@Component({
  selector: 'app-crear-pregunta-respuesta-encuesta',
  templateUrl: './crear-pregunta-respuesta-encuesta.component.html'
})
export class CrearPreguntaRespuestaEncuestaComponent {

  public crearEncuestaService = inject(CrearEncuestaService);


  @Input() pregunta!: PreguntaInterface;
  @Input() seccion!: SeccionInterface;

  elimnarPregunta(pregunta: PreguntaInterface) {
    //console.log(this.seccion);
    // Encuentra el índice de la sección que deseas eliminar
    let indicePreguntaAEliminar = this.seccion.preguntas.findIndex(item => pregunta.pre_uuid === item.pre_uuid);

    // Verifica si se encontró la sección
    if (indicePreguntaAEliminar !== -1) {
      //TODO: PONER  UN MENSAJE QUE SI DESEA ELIMINAR DESEA CONTINUAR SI/NO
      // Utiliza el método splice para eliminar la sección del arreglo
      this.seccion.preguntas.splice(indicePreguntaAEliminar, 1);
      console.log(`Sección con id ${indicePreguntaAEliminar} eliminada correctamente.`);
    } else {
      console.log(`No se encontró ninguna sección con id ${indicePreguntaAEliminar}.`);
    }
  }

}
