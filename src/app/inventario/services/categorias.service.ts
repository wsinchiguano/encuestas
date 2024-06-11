import { Injectable, inject, signal } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AppService } from 'src/app/services/app.service';
import { CategoriaInterface } from '../interfaces/inventario.interface';
import { MensajesService } from 'src/shared/helpers/mensajes.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class CategoriasService {
    private appService = inject(AppService);
    private authService = inject(AuthService);
    private mensajesService = inject(MensajesService);
    private router = inject(Router);


    //señales
    public nombreTituloSignal = signal<string>('');
    public categoriaListSignal = signal<CategoriaInterface[]>([]);
    public categoriaEditSignal = signal<CategoriaInterface | undefined>(undefined);
    public esNuevaCategoriaSignal = signal<boolean | undefined>(undefined);


    constructor() { }

    public getCategorias(argumento: string) {
        let arg = {
            codigo: 2,
            usuario: this.authService.usuario.per_cedula,
            parametros: {
                argumento: argumento
            },
        };
        this.appService.execute(JSON.stringify(arg)).subscribe({
            next: (data) => {
                // this.clientes = data.data;
                this.categoriaListSignal.set([...data.data]);
                //console.log('data', JSON.stringify(this.categoriaListSignal()));
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

    public guardar(nombre: string) {
        let arg = {
            codigo: 3,
            usuario: this.authService.usuario.per_cedula,
            parametros: {
                nombre: nombre
            },
        };
        this.appService.execute(JSON.stringify(arg)).subscribe({
            next: (data) => {
                // console.log('data', data.data[0].RESULTADO);
                if (data.data[0].RESULTADO == 1) {
                    this.mensajesService.msgs(
                        'Exito!',
                        data.data[0].MENSAJE,
                        'success',
                        'OK'
                    );

                    //CONSULTAMOS LA CATEGORIA INGRESADA
                    this.getCategorias(nombre);
                    this.router.navigate(['/inventario/categorias']);

                } else {
                    this.mensajesService.msgs(
                        'Advertencia!',
                        data.data[0].MENSAJE,
                        'warning',
                        'OK'
                    );
                }
                console.log('data', data);
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

    public actualizar(nombre: string, estado: string) {
        let arg = {
            codigo: 4,
            usuario: this.authService.usuario.per_cedula,
            parametros: {
                nombre: nombre,
                estado: estado,
                id: this.categoriaEditSignal()?.id_categoria,
            },
        };
        this.appService.execute(JSON.stringify(arg)).subscribe({
            next: (data) => {
                // console.log('data', data.data[0].RESULTADO);
                if (data.data[0].RESULTADO == 1) {
                    this.mensajesService.msgs(
                        'Exito!',
                        data.data[0].MENSAJE,
                        'success',
                        'OK'
                    );

                    //CONSULTAMOS LA CATEGORIA INGRESADA
                    this.getCategorias(nombre);
                    this.router.navigate(['/inventario/categorias']);

                } else {
                    this.mensajesService.msgs(
                        'Advertencia!',
                        data.data[0].MENSAJE,
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

}
