import { Injectable, inject, signal } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth/services/auth.service";
import { AppService } from "src/app/services/app.service";
import { MensajesService } from "src/shared/helpers/mensajes.service";
import { CargoFormularioInterface, GrupoEncuestaInterface, PlantillaCompetenciasInterface } from "../interfaces/encuestas.interface";



@Injectable({
    providedIn: 'root',
})
export class GrupoEncuestasService {
    private appService = inject(AppService);
    private authService = inject(AuthService);
    private mensajesService = inject(MensajesService);
    private router = inject(Router);

    //manejo del tab principal
    public indexTabSignal = signal<number>(0);
    public estadoTabsSignal = signal<boolean[]>([true, true, true, true]);
    public grupoEncuestasListSignal = signal<GrupoEncuestaInterface[]>([]);
    public plantillaExcel = signal<PlantillaCompetenciasInterface[]>([]);
    public cargoFormularioListSignal = signal<CargoFormularioInterface[]>([]);


    //grupo seleccionado
    public grupoEncuestasSelectedSignal = signal<GrupoEncuestaInterface | undefined>(undefined);

    /**
     * Consulta el grupo de encuestas dado un nombre
     * @param argumento 
     */
    getGrupoEncuestas(argumento: string) {
        let arg = {
            codigo: 23,
            usuario: this.authService.usuario.usu_usuario,
            parametros: {
                grupo: argumento, //saca todos
            },
        };
        this.appService.execute(JSON.stringify(arg)).subscribe({
            next: (data) => {
                // this.clientes = data.data;
                this.grupoEncuestasListSignal.set([...data.data]);
                //console.log('data', data.data);
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

    /**
     * carga los cargos 
     */
    loadPlantilla(json: any) {
        this.plantillaExcel.set(json);
        //cargar cargos en una arreglo teiene q permitir ingresar el id del formulario 
        let op: any = [];
        this.plantillaExcel().forEach((item) => {
            if (op.indexOf(item.cargo) == -1)
                op.push(item.cargo)
        });
        //decalramos un arreglo de objetos para pasarale al signal
        let tmp: CargoFormularioInterface[] = [];
        //por cada cargo creamos un objeto y lo añadimos al arreglo temporal
        op.forEach((item: any) => {
            let objeto = {
                nombre_cargo: item,
                id_formulario: 0,
                nombre_formulario: ''
            }

            tmp.push(objeto);
        });

        this.cargoFormularioListSignal.set(tmp);

    }

    /**
     * guarda plantilla a la bdd
     */
    savePlantilla() {
        let arg = {
            codigo: 29,
            usuario: this.authService.usuario.usu_usuario,
            parametros: {
                id_grupo: this.grupoEncuestasSelectedSignal()?.gru_id,
                encuestados: JSON.stringify(this.plantillaExcel())
            },
        };
        this.appService.execute(JSON.stringify(arg)).subscribe({
            next: (data) => {
                if (data.data[0].valor == 1) {
                    this.mensajesService.msgs(
                        'Exito!',
                        data.data[0].mensaje,
                        'success',
                        'OK'
                    );
                    return;
                } else {
                    this.mensajesService.msgs(
                        'Advertencia!',
                        data.data[0].mensaje,
                        'warning',
                        'OK'
                    );
                    return;
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
    }

    /**
    * guarda cargos-formulario a la bdd
    */
    saveCargoFormulario(cargoFormulario: any) {
        let arg = {
            codigo: 30,
            usuario: this.authService.usuario.usu_usuario,
            parametros: {
                id_grupo: this.grupoEncuestasSelectedSignal()?.gru_id,
                asignacion_grupo: JSON.stringify(cargoFormulario)
            },
        };
        this.appService.execute(JSON.stringify(arg)).subscribe({
            next: (data) => {
                if (data.data[0].valor == 1) {
                    this.mensajesService.msgs(
                        'Exito!',
                        data.data[0].mensaje,
                        'success',
                        'OK'
                    );
                    return;
                } else {
                    this.mensajesService.msgs(
                        'Advertencia!',
                        data.data[0].mensaje,
                        'warning',
                        'OK'
                    );
                    return;
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
    }
    /**
    * guarda malla asignacion
    */
    saveAsignacionEvaluador() {
        let arg = {
            codigo: 31,
            usuario: this.authService.usuario.usu_usuario,
            parametros: {
                id_grupo: this.grupoEncuestasSelectedSignal()?.gru_id,
                encuestados: JSON.stringify(this.plantillaExcel())
            },
        };
        this.appService.execute(JSON.stringify(arg)).subscribe({
            next: (data) => {
                if (data.data[0].valor == 1) {
                    this.mensajesService.msgs(
                        'Exito!',
                        data.data[0].mensaje,
                        'success',
                        'OK'
                    );
                    return;
                } else {
                    this.mensajesService.msgs(
                        'Advertencia!',
                        data.data[0].mensaje,
                        'warning',
                        'OK'
                    );
                    return;
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
    }

    /**
     * guarda mensaje
     */
    savePlantillaEmail(asunto: string, cuerpo: string): Promise<number> {
        let arg = {
            codigo: 32,
            usuario: this.authService.usuario.usu_usuario,
            parametros: {
                id_grupo: this.grupoEncuestasSelectedSignal()?.gru_id,
                asunto: asunto,
                cuerpo: cuerpo,

            },
        };

        return new Promise<number>((resolve, reject) => {
            this.appService.execute(JSON.stringify(arg)).subscribe({
                next: (data) => {
                    if (data.data[0].valor == 1) {
                      
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
                    // this.router.navigateByUrl('/auth');
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

    /**
     * Modificamos grupo encuesta
     * @param estado 
     * @returns 
     */
    modificarGrupoEncuesta(estado: string): Promise<number> {
        let arg = {
            codigo: 24,
            usuario: this.authService.usuario.usu_usuario,
            parametros: {
                nombre: '',
                codigo: this.grupoEncuestasSelectedSignal()?.gru_id,
                estado: ''


            },
        };

        return new Promise<number>((resolve, reject) => {
            this.appService.execute(JSON.stringify(arg)).subscribe({
                next: (data) => {
                    resolve(data.data[0].valor);

                    // if (data.data[0].valor == 1) {
                    //     this.mensajesService.msgs(
                    //         'Exito!',
                    //         data.data[0].mensaje,
                    //         'success',
                    //         'OK'
                    //     );
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
                    // this.router.navigateByUrl('/auth');
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

    inicializaEncuesta(): Promise<number> {
        let arg = {
            codigo: 33,
            usuario: this.authService.usuario.usu_usuario,
            parametros: {
                id_grupo: this.grupoEncuestasSelectedSignal()?.gru_id,
            },
        };

        return new Promise<number>((resolve, reject) => {
            this.appService.execute(JSON.stringify(arg)).subscribe({
                next: (data) => {
                    if (data.data[0].valor == 1) {
                        this.mensajesService.msgs(
                            'Exito!',
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