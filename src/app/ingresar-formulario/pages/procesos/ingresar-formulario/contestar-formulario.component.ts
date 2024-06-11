import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IngresarFormularioService } from 'src/app/ingresar-formulario/service/ingresar-formulario.service';
import { MensajesService } from 'src/shared/helpers/mensajes.service';

@Component({
  selector: 'app-contestar-formulario',
  templateUrl: './contestar-formulario.component.html',
  styleUrls: ['./contestar-formulario.component.css']
})
export class ContestarFormularioComponent implements OnInit {
  public router = inject(Router);
  private mensajesService = inject(MensajesService);
  public ingresarFormularioService = inject(IngresarFormularioService)



  ngOnInit(): void {

    if (!this.ingresarFormularioService.evaluadoSelectedSignal().formulario) {
      this.router.navigate([`/ingresarFormulario/default`]);
    }

    this.ingresarFormularioService.formularioSignal.set(JSON.parse(this.ingresarFormularioService.evaluadoSelectedSignal().formulario)[0])
    // console.log('ok', this.ingresarFormularioService.formularioSignal()?.secciones);
  }

  regresar() {
    this.router.navigate([`/ingresarFormulario/${this.ingresarFormularioService.uuidSignal()}`]);
  }

  async guardar() {
    this.ingresarFormularioService.formularioSignal()?.secciones.forEach((seccion) => {
      seccion.preguntas.forEach((pregunta) => {
        if (pregunta.valor == undefined) {
          this.mensajesService.msgs(
            'Advertencia!',
            'Completar la evaluación',
            'warning',
            'OK'
          );
          return;
        }
      });
    });

    let respuesta = {
      persona: this.ingresarFormularioService.evaluadorSelectedSignal().asg_per_id,
      persona_eva: this.ingresarFormularioService.evaluadoSelectedSignal().asg_per_id_asignado,
      formulario: this.ingresarFormularioService.formularioSignal()?.enc_id,
      respuestas: <any>[]
    }

    this.ingresarFormularioService.formularioSignal()?.secciones.forEach((seccion) => {
      seccion.preguntas.forEach((pregunta) => {
        if (pregunta.pre_tipo == 'O') {
          let res = {
            pregunta: pregunta.pre_id,
            respuesta: pregunta.valor.opc_id,
            texto: ''
          };
          respuesta.respuestas.push(res)

        }

        if (pregunta.pre_tipo == 'T') {
          let res = {
            pregunta: pregunta.pre_id,
            respuesta: 0,
            texto: pregunta.valor
          };

          respuesta.respuestas.push(res)

        }
      });
    });


   // console.log(respuesta);
    let resultado = await this.ingresarFormularioService.guardarFormularioContestado(respuesta);

    //si resultao es 1 redirecciona al inicio
    if (resultado == 1) {
      this.ingresarFormularioService.getAEvaluar(this.ingresarFormularioService.uuidSignal());
      this.router.navigate([`/ingresarFormulario/${this.ingresarFormularioService.uuidSignal()}`]);
    }

  }

}
