import { Injectable, inject, signal } from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from "src/app/services/app.service";
import { MensajesService } from "src/shared/helpers/mensajes.service";
import { FormularioIngresoInterface } from "../interface/ingresar-formulario.interface";


@Injectable({
    providedIn: 'root',
})
export class IngresarFormularioService {
    private appService = inject(AppService);
    private mensajesService = inject(MensajesService);
    private router = inject(Router);

    //signals
    public evaluadosList = signal<any[]>([]);
    public formularioSignal = signal<FormularioIngresoInterface | undefined>(undefined);

    public evaluadorSelectedSignal = signal<any>({
        per_nombre: ''
    });

    public evaluadoSelectedSignal = signal<any>({
        per_nombre: ''
    });

    public visualizarEncuestadosSignal = signal<boolean>(true);
    public uuidSignal = signal<string>('');



    /**
    * desde aqui 
    */

    public getAEvaluar(uuid: string): Promise<number> {
        let arg = {
            codigo: 34,
            usuario: 'CLIENTE-ENC_2024',
            parametros: {
                codigo: uuid
            },
        };

        return new Promise<number>((resolve, reject) => {
            this.appService.executePublic(JSON.stringify(arg)).subscribe({
                next: (data) => {
                    //existe algun error
                    if (data.data[0].valor == -1) {
                        resolve(-1);
                    }

                    this.evaluadosList.set([...data.data]);
                    if (this.evaluadosList().length > 0) {
                        this.evaluadorSelectedSignal.set(this.evaluadosList()[0]);
                        resolve(1);
                        // console.log(this.evaluadorSelectedSignal());
                    }

                    // if (data.data[0].valor == 1) {
                    //     this.evaluadosList.set([...data.data]);
                    //     resolve(1);
                    // } else {
                    //     this.mensajesService.msgs(
                    //         'Advertencia!',
                    //         data.data[0].mensaje,
                    //         'warning',
                    //         'OK'
                    //     );
                    //     resolve(-1);
                    // }
                },
                error: (error) => {
                    this.mensajesService.msgs(
                        'Error!',
                        error.error.message,
                        'warning',
                        'OK'
                    );
                    console.log('error: ', error);
                    reject(error);
                },
                complete: () => {
                    //aqui van los logs
                },
            });
        });
    }


    /**
     * Guarda el formulario contestado
     * @param formularioContestado en formato json
     * @returns 
     */
    public guardarFormularioContestado(formularioContestado: any): Promise<number> {
        let arg = {
            codigo: 35,
            usuario: 'CLIENTE-ENC_2024',
            parametros: {
                persona: formularioContestado.persona,
                persona_eva: formularioContestado.persona_eva,
                formulario: formularioContestado.formulario,
                respuestas: JSON.stringify(formularioContestado.respuestas)
            },
        };

        return new Promise<number>((resolve, reject) => {
            this.appService.executePublic(JSON.stringify(arg)).subscribe({
                next: (data) => {

                    if (data.data[0].valor == 1) {
                        this.mensajesService.msgs(
                            'Mensaje!',
                            data.data[0].mensaje,
                            'success',
                            'OK'
                        );
                        resolve(1);
                    } else {
                        this.mensajesService.msgs(
                            'Advertencia!',
                            data.data[0].mensaje,
                            'warning',
                            'OK'
                        );
                        resolve(-1);
                    }
                },
                error: (error) => {
                    this.mensajesService.msgs(
                        'Error!',
                        error.error.message,
                        'warning',
                        'OK'
                    );
                    console.log('error: ', error);
                    reject(error);
                },
                complete: () => {
                    //aqui van los logs
                },
            });
        });
    }


}