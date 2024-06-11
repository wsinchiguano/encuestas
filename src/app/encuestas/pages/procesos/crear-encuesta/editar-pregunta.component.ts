import { Component, Input, inject } from '@angular/core';
import { OpcionInterface, PreguntaInterface } from 'src/app/encuestas/interfaces/encuestas.interface';
import { CrearEncuestaService } from 'src/app/encuestas/services/crear-encuesta.service';

@Component({
  selector: 'app-editar-pregunta',
  templateUrl: './editar-pregunta.component.html'
})
export class EditarPreguntaComponent {
  public crearEncuestaService = inject(CrearEncuestaService);

  @Input() preguntaSelected!: PreguntaInterface;

  saveOption(pregunta: PreguntaInterface, index: number, event: any) {
    pregunta.opciones[index].opc_nombre = event.target.value;
  }

  eliminarOpcion(opcion: OpcionInterface) {
    //console.log(opcion);

    // Encuentra el índice de la sección que deseas eliminar
    let indiceSeccionAEliminar = this.preguntaSelected.opciones.findIndex(item => opcion.opc_uuid === item.opc_uuid);

    // Verifica si se encontró la sección
    if (indiceSeccionAEliminar !== -1) {
      //TODO: PONER  UN MENSAJE QUE SI DESEA ELIMINAR DESEA CONTINUAR SI/NO
      // Utiliza el método splice para eliminar la sección del arreglo
      this.preguntaSelected.opciones.splice(indiceSeccionAEliminar, 1);
      console.log(`Sección con id ${indiceSeccionAEliminar} eliminada correctamente.`);
    } else {
      console.log(`No se encontró ninguna sección con id ${indiceSeccionAEliminar}.`);
    }

  }

  agregarOpcion() {
    this.preguntaSelected.opciones.push(
      {
        opc_uuid: this.getUniqueId(10),
        opc_nombre: "editar opcion",
        opc_id:0
      }
    )
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
