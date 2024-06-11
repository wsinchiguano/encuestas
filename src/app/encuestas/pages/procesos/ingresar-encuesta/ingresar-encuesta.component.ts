import { Component, OnInit, inject } from '@angular/core';
import { IngresarEncuestaService } from '../../../services/ingresar-encuesta.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AsignadosInterface } from 'src/app/encuestas/interfaces/encuestas.interface';

@Component({
    selector: 'app-ingresar-encuesta',
    templateUrl: './ingresar-encuesta.component.html',
})
export class IngresarEncuestaComponent implements OnInit {
    public route = inject(ActivatedRoute);
    public ingresarEncuestaService = inject(IngresarEncuestaService);
    // private authService = inject(AuthService);
    // private fb = inject(FormBuilder);
    // private router = inject(Router);

    ngOnInit(): void {
        // this.ingresarEncuestaService.getAsignados(
        //     this.authService.usuario.usu_persona
        // );
        this.route.params.subscribe(params => {
            //consultamos el uuid
            this.ingresarEncuestaService.getAEvaluar(params['uuid']);

            //si existe y no esta ya completado
            if (this.ingresarEncuestaService.evaluadosList().length == 0) {
                //redirect pagina q ya termino o no existe mas para evaluar
            }
            //presenta todos los formularios asociados a esa personas


            console.log(params['uuid']);
        });

    }

    // seleccionar(item: AsignadosInterface) {
    //     this.ingresarEncuestaService.encuestadoSelectedSignal.set(item);
    //     this.ingresarEncuestaService.getBloque(item.enc_id);
    //     this.router.navigate(['/encuestas/encuesta']);
    // }
}
