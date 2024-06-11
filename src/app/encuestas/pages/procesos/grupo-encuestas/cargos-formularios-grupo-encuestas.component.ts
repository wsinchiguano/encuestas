import { Component, OnInit, inject } from '@angular/core';
import { CargoFormularioInterface } from 'src/app/encuestas/interfaces/encuestas.interface';
import { CrearEncuestaService } from 'src/app/encuestas/services/crear-encuesta.service';
import { GrupoEncuestasService } from 'src/app/encuestas/services/grupo-encuestas.service';
import { MensajesService } from 'src/shared/helpers/mensajes.service';

@Component({
  selector: 'app-cargos-formularios-grupo-encuestas',
  templateUrl: './cargos-formularios-grupo-encuestas.component.html',
  styleUrls: ['./cargos-formularios-grupo-encuestas.component.css']
})
export class CargosFormulariosGrupoEncuestasComponent implements OnInit {
  private mensajesService = inject(MensajesService);
  public grupoEncuestasService = inject(GrupoEncuestasService);
  public crearEncuestaService = inject(CrearEncuestaService);


  // formularios: any[] = [
  //   { label: 'Formulario 1', value: 'Formulario 1' },
  //   { label: 'Formulario 2', value: 'Formulario 2' },
  //   { label: 'Formulario 3', value: 'Formulario 3' }
  // ];
  ngOnInit(): void {
    this.crearEncuestaService.getFromularios('%');
  }

  continuar() {
    //armar el json para enviar a guardarse
    let cargoFormularioList: any[] = [];
    this.grupoEncuestasService.cargoFormularioListSignal().forEach((item: CargoFormularioInterface) => {

      if (!item.id_formulario.enc_id) {
        this.mensajesService.msgs(
          'Advertencia!',
          'Todos los cargos tienen que tener un formulario',
          'warning',
          'OK'
        );
        return;
      }
      let cargoForm = {
        cargo: item.nombre_cargo,
        formulario: item.id_formulario.enc_id
      };
      cargoFormularioList.push(cargoForm);
    });


    this.grupoEncuestasService.saveCargoFormulario(cargoFormularioList);

    //console.log('ok', cargoFormularioList);
    
    this.grupoEncuestasService.indexTabSignal.set(3);
    this.grupoEncuestasService.estadoTabsSignal.set([false, false, false, true]);
  }
}
