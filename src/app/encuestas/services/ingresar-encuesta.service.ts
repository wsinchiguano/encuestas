import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AppService } from 'src/app/services/app.service';
import { MensajesService } from 'src/shared/helpers/mensajes.service';
import {
    AsignadosInterface,
    BloquesInterface,
} from '../interfaces/encuestas.interface';

@Injectable({
    providedIn: 'root',
})
export class IngresarEncuestaService {
    private appService = inject(AppService);
    private authService = inject(AuthService);
    private mensajesService = inject(MensajesService);
    private router = inject(Router);

    //signals----------------
    public asignadosListSignal = signal<AsignadosInterface[]>([]);
    public bloquesListSignal = signal<BloquesInterface[]>([]);

    //public bloquesListSignal = signal<BloquesInterface[]>([]);
    public encuestadoSelectedSignal = signal<AsignadosInterface | undefined>(
        undefined
    );
    //----------------------------------

    //desde aqui
    public evaluadosList = signal<any[]>([]);


    public getAsignados(persona: number | undefined) {
        let arg = {
            codigo: 6,
            usuario: this.authService.usuario.usu_usuario,
            parametros: {
                persona: persona,
            },
        };
        this.appService.execute(JSON.stringify(arg)).subscribe({
            next: (data) => {
                // this.clientes = data.data;
                this.asignadosListSignal.set([...data.data]);
                //console.log('data', JSON.stringify(this.asignadosListSignal()));
            },
            error: (error) => {
                // this.router.navigateByUrl('/auth');
                this.mensajesService.msgs(
                    'Advertencia!',
                    error.error.message,
                    'warning',
                    'OK'
                );
                console.log('error: ', error);
            },
            complete: () => {
                //aqui van los logs
            },
        });
    }
    public getBloque(encuesta: number) {
        let arg = {
            codigo: 8,
            usuario: this.authService.usuario.usu_usuario,
            parametros: {
                encuesta: encuesta,
            },
        };
        this.appService.execute(JSON.stringify(arg)).subscribe({
            next: (data) => {
                this.bloquesListSignal.set([...data.data]);

                // por cada bloque leemos las preguntas

                this.bloquesListSignal().forEach((bloque) => {
                    let arg = {
                        codigo: 9,
                        usuario: this.authService.usuario.usu_usuario,
                        parametros: {
                            bloque: bloque.blo_id,
                        },
                    };

                    this.appService.execute(JSON.stringify(arg)).subscribe({
                        next: (data) => {
                            bloque.preguntas = [...data.data];

                            bloque.preguntas.forEach((pregunta) => {
                                let arg = {
                                    codigo: 10,
                                    usuario:
                                        this.authService.usuario.usu_usuario,
                                    parametros: {
                                        pregunta: pregunta.pre_id,
                                    },
                                };

                                this.appService
                                    .execute(JSON.stringify(arg))
                                    .subscribe({
                                        next: (data) => {
                                            if (
                                                data.data ||
                                                data.data != null
                                            ) {
                                                pregunta.respuestas = [
                                                    ...data.data,
                                                ];
                                            } else {
                                                console.log(
                                                    'datos',
                                                    'sin datos'
                                                );
                                                pregunta.respuestas = [];
                                            }
                                        },
                                        error: (error) => {
                                            // this.router.navigateByUrl('/auth');
                                            this.mensajesService.msgs(
                                                'Advertencia!',
                                                error.error.message,
                                                'warning',
                                                'OK'
                                            );
                                            console.log('error: ', error);
                                        },
                                        complete: () => {
                                            //aqui van los logs
                                        },
                                    });
                            });
                        },
                        error: (error) => {
                            // this.router.navigateByUrl('/auth');
                            this.mensajesService.msgs(
                                'Advertencia!',
                                error.error.message,
                                'warning',
                                'OK'
                            );
                            console.log('error: ', error);
                        },
                        complete: () => {
                            //aqui van los logs
                        },
                    });
                });
            },
            error: (error) => {
                this.mensajesService.msgs(
                    'Advertencia!',
                    error.error.message,
                    'warning',
                    'OK'
                );
                console.log('error: ', error);
            },
            complete: () => {
                //aqui van los logs
            },
        });
    }
    /**
     *
     */
    public guardar() {
        let valor = 0;
        this.bloquesListSignal().forEach((bloque) => {
            bloque.preguntas.forEach((pregunta) => {
                valor = valor + pregunta.valor.res_valor;
            });
        });

        //guardamos la cabecera
        let arg = {
            codigo: 11,
            usuario: this.authService.usuario.usu_usuario,
            parametros: {
                persona: this.encuestadoSelectedSignal()?.per_id,
                persona_enc: this.encuestadoSelectedSignal()?.per_id_asignado,
                encuesta: this.encuestadoSelectedSignal()?.enc_id,
                valor: valor,
            },
        };
        this.appService.execute(JSON.stringify(arg)).subscribe({
            next: (data) => {
                if (data.data[0].valor == 1) {
                    //guardamos el detalle cabecera int,
                    this.bloquesListSignal().forEach((bloque) => {
                        bloque.preguntas.forEach((pregunta) => {
                            let arg2 = {
                                codigo: 12,
                                usuario: this.authService.usuario.usu_usuario,
                                parametros: {
                                    cabecera: data.data[0].clave_cebecera,
                                    pregunta: pregunta.pre_id,
                                    respuesta: pregunta.valor.res_id,
                                },
                            };
                            this.appService
                                .execute(JSON.stringify(arg2))
                                .subscribe({
                                    next: (data) => {
                                        if (data.data[0].valor == 1) {
                                        } else {
                                            this.mensajesService.msgs(
                                                'Advertencia!',
                                                data.data[0].mensaje,
                                                'warning',
                                                'OK'
                                            );
                                            return;
                                        }
                                        //  console.log('data', data);
                                    },
                                    error: (error) => {
                                        // this.router.navigateByUrl('/auth');
                                        this.mensajesService.msgs(
                                            'Advertencia!',
                                            error.error.message,
                                            'warning',
                                            'OK'
                                        );
                                        console.log('error: ', error);
                                    },
                                    complete: () => {
                                        //aqui van los logs
                                    },
                                });
                        });
                    });

                    /**
                     * 	persona int,
        persona_enc int,
        encuesta int,
        cabecera int
                     */
                    let arg3 = {
                        codigo: 13,
                        usuario: this.authService.usuario.usu_usuario,
                        parametros: {
                            persona: this.encuestadoSelectedSignal()?.per_id,
                            persona_enc:
                                this.encuestadoSelectedSignal()
                                    ?.per_id_asignado,
                            encuesta: this.encuestadoSelectedSignal()?.enc_id,
                            cabecera: data.data[0].clave_cebecera,
                        },
                    };
                    this.appService.execute(JSON.stringify(arg3)).subscribe({
                        next: (data) => {
                            if (data.data[0].valor == 1) {
                            } else {
                                this.mensajesService.msgs(
                                    'Advertencia!',
                                    data.data[0].mensaje,
                                    'warning',
                                    'OK'
                                );
                                return;
                            }
                            //  console.log('data', data);
                        },
                        error: (error) => {
                            // this.router.navigateByUrl('/auth');
                            this.mensajesService.msgs(
                                'Advertencia!',
                                error.error.message,
                                'warning',
                                'OK'
                            );
                            console.log('error: ', error);
                        },
                        complete: () => {
                            //aqui van los logs
                        },
                    });

                    this.mensajesService.msgs(
                        'Exito!',
                        data.data[0].mensaje,
                        'success',
                        'OK'
                    );
                    this.getAsignados(this.encuestadoSelectedSignal()?.per_id);
                    this.router.navigate(['/encuestas/ingresar-encuesta']);
                } else {
                    this.mensajesService.msgs(
                        'Advertencia!',
                        data.data[0].mensaje,
                        'warning',
                        'OK'
                    );
                }
                //  console.log('data', data);
            },
            error: (error) => {
                // this.router.navigateByUrl('/auth');
                this.mensajesService.msgs(
                    'Advertencia!',
                    error.error.message,
                    'warning',
                    'OK'
                );
                console.log('error: ', error);
                return;
            },
            complete: () => {
                //aqui van los logs
            },
        });
    }

    /**
     * desde aqui 
     */

    public getAEvaluar(uuid: string): Promise<number> {
        let arg = {
            codigo: 34,
           // usuario: this.authService.usuario.usu_usuario,
            parametros: {
                codigo: uuid
            },
        };

        return new Promise<number>((resolve, reject) => {
            this.appService.executePublic(JSON.stringify(arg)).subscribe({
                next: (data) => {
                    if (data.data[0].valor == 1) {
                        this.evaluadosList.set([...data.data]);
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
                        'Advertencia!',
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
