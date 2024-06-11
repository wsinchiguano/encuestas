import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AppService } from 'src/app/services/app.service';
import { MensajesService } from 'src/shared/helpers/mensajes.service';
import { CargoInterface } from '../interfaces/encuestas.interface';

@Injectable({
    providedIn: 'root',
})
export class CargosService {
    private appService = inject(AppService);
    private authService = inject(AuthService);
    private mensajesService = inject(MensajesService);
    private router = inject(Router);

    //signals
    public cargosListSignal = signal<CargoInterface[]>([]);
    public cargoSelectedSignal = signal<CargoInterface | undefined>(undefined);
    public nombreTituloSignal = signal<string>('');
    public esNuevoSignal = signal<boolean>(false);

    public getCargos(nombre: string) {
        let arg = {
            codigo: 16,
            usuario: this.authService.usuario.usu_usuario,
            parametros: {
                estado: '%',
                nombre: nombre,
            },
        };
        this.appService.execute(JSON.stringify(arg)).subscribe({
            next: (data) => {
                // this.clientes = data.data;
                this.cargosListSignal.set([...data.data]);
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

    public editCargo(id: number | undefined, nombre: string, estado: string) {
        let arg = {
            codigo: 15,
            usuario: this.authService.usuario.usu_usuario,
            parametros: {
                codigo: id,
                nombre: nombre,
                estado: estado,
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

                    //CONSULTAMOS EL CARGO
                    this.getCargos(nombre);
                    this.router.navigate(['/encuestas/cargos']);
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

    public insertCargo(nombre: string) {
        let arg = {
            codigo: 14,
            usuario: this.authService.usuario.usu_usuario,
            parametros: {
                nombre: nombre,
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

                    //CONSULTAMOS EL CARGO
                    this.getCargos(nombre);
                    this.router.navigate(['/encuestas/cargos']);
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
}
