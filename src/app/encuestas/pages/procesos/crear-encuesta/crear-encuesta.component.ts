import { Component, inject } from '@angular/core';
import { CrearEncuestaService } from 'src/app/encuestas/services/crear-encuesta.service';

@Component({
  selector: 'app-crear-encuesta',
  templateUrl: './crear-encuesta.component.html'
})
export class CrearEncuestaComponent {
  public crearEncuestaService = inject(CrearEncuestaService);


  handleChange(e: any) {
    this.crearEncuestaService.indexTabSignal.set(e.index);
  }
}
