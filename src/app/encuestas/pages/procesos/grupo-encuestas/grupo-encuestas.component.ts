import { Component, inject } from '@angular/core';
import { GrupoEncuestasService } from 'src/app/encuestas/services/grupo-encuestas.service';

@Component({
  selector: 'app-grupo-encuestas',
  templateUrl: './grupo-encuestas.component.html',
  styleUrls: ['./grupo-encuestas.component.css']
})
export class GrupoEncuestasComponent {

  public grupoEncuestaService = inject(GrupoEncuestasService);

  handleChange(e: any) {
    this.grupoEncuestaService.indexTabSignal.set(e.index);
  }

}
