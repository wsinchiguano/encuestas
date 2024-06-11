import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AppService } from 'src/app/services/app.service';
import { MensajesService } from 'src/shared/helpers/mensajes.service';
import {
    AsignadosInterface,
    EncuestadoInterface,
} from '../interfaces/encuestas.interface';

@Injectable({
    providedIn: 'root',
})
export class EncuestadosService {
    private appService = inject(AppService);
    private authService = inject(AuthService);
    private mensajesService = inject(MensajesService);
    private router = inject(Router);

    //signals
    public encuestadosListSignal = signal<EncuestadoInterface[]>([]);
    public encuestadosAsignarListSignal = signal<EncuestadoInterface[]>([]);
    public asignadosListSignal = signal<AsignadosInterface[]>([]);
    public encuestadoEditSignal = signal<EncuestadoInterface | undefined>(
        undefined
    );
    public nombreTituloSignal = signal<string>('');
    public esNuevoSignal = signal<boolean>(false);

    public getEncuestados(argumento: string) {
        let arg = {
            codigo: 1,
            usuario: this.authService.usuario.usu_usuario,
            parametros: {
                argumento: argumento,
            },
        };
        this.appService.execute(JSON.stringify(arg)).subscribe({
            next: (data) => {
                // this.clientes = data.data;
                this.encuestadosListSignal.set([...data.data]);
                //console.log('data', JSON.stringify(this.encuestadosListSignal()));
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

    public getEncuestadosAsignar(argumento: string) {
        let arg = {
            codigo: 1,
            usuario: this.authService.usuario.usu_usuario,
            parametros: {
                argumento: argumento,
            },
        };
        this.appService.execute(JSON.stringify(arg)).subscribe({
            next: (data) => {
                // this.clientes = data.data;
                this.encuestadosAsignarListSignal.set([...data.data]);
                //console.log('data', JSON.stringify(this.encuestadosListSignal()));
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

    public editEncuestado(
        id: number | undefined,
        cedula: string,
        nombre: string,
        linea: string,
        cargo: number,
        estado: string,
        usuario: string
    ) {
        let arg = {
            codigo: 2,
            usuario: this.authService.usuario.usu_usuario,
            parametros: {
                id: id,
                cedula: cedula,
                nombre: nombre,
                linea: linea,
                cargo: cargo,
                estado: estado,
                usuario: usuario,
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

                    //CONSULTAMOS LA CATEGORIA INGRESADA
                    this.getEncuestados(cedula);
                    this.router.navigate(['/encuestas/encuestados']);
                } else {
                    this.mensajesService.msgs(
                        'Advertencia!',
                        data.data[0].mensaje,
                        'warning',
                        'OK'
                    );
                }
                // console.log('data', data);
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
    public insertEncuestado(
        cedula: string,
        nombre: string,
        linea: string,
        cargo: number
    ) {
        let arg = {
            codigo: 4,
            usuario: this.authService.usuario.usu_usuario,
            parametros: {
                cedula: cedula,
                nombre: nombre,
                linea: linea,
                cargo: cargo,
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

                    //CONSULTAMOS LA CATEGORIA INGRESADA
                    this.getEncuestados(cedula);
                    this.router.navigate(['/encuestas/encuestados']);
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
            },
            complete: () => {
                //aqui van los logs
            },
        });
    }
    public getAsignados() {
        let arg = {
            codigo: 6,
            usuario: this.authService.usuario.usu_usuario,
            parametros: {
                persona: this.encuestadoEditSignal()?.per_id,
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

    public deleteAsignados() {
        let arg = {
            codigo: 7,
            usuario: this.authService.usuario.usu_usuario,
            parametros: {
                persona: this.encuestadoEditSignal()?.per_id,
            },
        };
        this.appService.execute(JSON.stringify(arg)).subscribe({
            next: (data) => {
                if (data.data[0].valor == 1) {
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
            },
            complete: () => {
                //aqui van los logs
            },
        });
    }
    /**
     * persona INT,
		persona_encu INT,
		encuesta INT
     */
    public insertAsignados(
        persona: number | undefined,
        persona_encu: number,
        encuesta: number
    ) {
        let arg = {
            codigo: 5,
            usuario: this.authService.usuario.usu_usuario,
            parametros: {
                persona: persona,
                persona_encu: persona_encu,
                encuesta: encuesta,
            },
        };
        this.appService.execute(JSON.stringify(arg)).subscribe({
            next: (data) => {
                if (data.data[0].valor == 1) {
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
}
