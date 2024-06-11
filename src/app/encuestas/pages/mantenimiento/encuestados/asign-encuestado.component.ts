import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import {
    AsignadosInterface,
    EncuestadoInterface,
} from 'src/app/encuestas/interfaces/encuestas.interface';
import { EncuestadosService } from 'src/app/encuestas/services/encuestados.service';
import { MensajesService } from 'src/shared/helpers/mensajes.service';

@Component({
    selector: 'app-asign-encuestado',
    templateUrl: './asign-encuestado.component.html',
})
export class AsignEncuestadoComponent {
    public encuestadosService = inject(EncuestadosService);
    private authService = inject(AuthService);

    private fb = inject(FormBuilder);
    private router = inject(Router);
    private mensajesService = inject(MensajesService);
    busquedaPersonaDialog = false;
    regresar() {
        this.router.navigate(['/encuestas/encuestados']);
    }
    guardar() {
      //eliminar lista
      this.encuestadosService.deleteAsignados();
      //guardar
        this.encuestadosService.asignadosListSignal().forEach((element) => {
          this.encuestadosService.insertAsignados(
            this.encuestadosService.encuestadoEditSignal()?.per_id,
            element.per_id_asignado,
            1
          )
        });

        this.mensajesService.msgs(
          'Exito!',
          'Datos ingresados',
          'success',
          'OK'
      );
    }
    deleteAsign(persona: AsignadosInterface) {
        this.encuestadosService.asignadosListSignal().splice(
            this.encuestadosService
                .asignadosListSignal()
                .findIndex(
                    (item) => item.per_id_asignado === persona.per_id_asignado
                ),
            1
        );
    }

    verEncuestadosDialog() {
        this.busquedaPersonaDialog = true;
    }

    addEncuestado(item: EncuestadoInterface) {
        if (!this.encuestadosService.asignadosListSignal()) {
            this.encuestadosService.asignadosListSignal.set([]);
        }

        this.encuestadosService.asignadosListSignal().findIndex((persona) => {
            // console.log('persona', persona);
            if (persona.per_id_asignado == item.per_id) {
                this.mensajesService.msgs(
                    'Advertencia!',
                    'Este perfil ya esta asignado!',
                    'warning',
                    'OK'
                );
                //elimina la seleccion echa en la ventana emergente
                this.encuestadosService.encuestadosAsignarListSignal.set([]);
                this.busquedaPersonaDialog = false;
                return;
            }
        });

        /**
         *  per_id:          number;
    per_id_asignado: number;
    enc_id:          number;
    asi_estado:      string;
    per_nombre:      string;
    per_cargo:       string;
    asig_nombre:     string;
    asig_cargo:      string;
         */

        this.encuestadosService.asignadosListSignal().push({
            per_id: this.encuestadosService.encuestadoEditSignal()?.per_id,
            per_id_asignado: item.per_id,
            enc_id: 1,
            asi_estado: 'A',
            per_nombre: '',
            per_cargo: '',
            asig_nombre: item.per_nombre,
            asig_cargo: item.per_cargo,
        });

        //elimina la seleccion echa en la ventana emergente
        this.encuestadosService.encuestadosAsignarListSignal.set([]);
        this.busquedaPersonaDialog = false;
    }

    onTxtPerfilKey(value: string) {
        if (value.trim() != '') {
            this.encuestadosService.getEncuestadosAsignar(value);
        } else {
            this.encuestadosService.encuestadosAsignarListSignal.set([]);
        }
    }
}
