import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { IngresarEncuestaService } from 'src/app/encuestas/services/ingresar-encuesta.service';
import { MensajesService } from 'src/shared/helpers/mensajes.service';

@Component({
    selector: 'app-encuesta',
    templateUrl: './encuesta.component.html',
})
export class EncuestaComponent implements OnInit {
    public ingresarEncuestaService = inject(IngresarEncuestaService);
    private authService = inject(AuthService);
    private fb = inject(FormBuilder);
    private mensajesService = inject(MensajesService);
    private router = inject(Router);

    ngOnInit(): void {}

    guardar() {
        // validar q esten contestadas todas las preguntas
        this.ingresarEncuestaService.bloquesListSignal().forEach((bloque) => {
            bloque.preguntas.forEach((pregunta) => {
                if (pregunta.valor == undefined) {
                    this.mensajesService.msgs(
                        'Advertencia!',
                        'Completar la evaluación',
                        'warning',
                        'OK'
                    );
                    // console.log('pregunta ok', pregunta.valor);
                    return;
                }
            });
        });

        this.ingresarEncuestaService.guardar();
    }
    regresar() {
        this.router.navigate(['/encuestas/ingresar-encuesta']);
    }
}
