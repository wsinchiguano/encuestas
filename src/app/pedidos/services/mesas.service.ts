import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AppService } from 'src/app/services/app.service';
import { MensajesService } from 'src/shared/helpers/mensajes.service';
import { MesasInterface } from '../interfaces/pedidos.interface';

@Injectable({
  providedIn: 'root'
})
export class MesasService {
  private appService = inject(AppService);
  private authService = inject(AuthService);
  private mensajesService = inject(MensajesService);
  private router = inject(Router);

  //señales
  public mesasListSignal = signal<MesasInterface[]>([]);
  public nombreTituloSignal = signal<string>('');
  public mesaEditSignal = signal<MesasInterface | undefined>(undefined);
  public esNuevaMesaSignal = signal<boolean | undefined>(undefined);

  constructor() { }

  public getMesas(argumento: string) {
    let arg = {
      codigo: 5,
      usuario: this.authService.usuario.per_cedula,
      parametros: {
        argumento: argumento
      },
    };
    this.appService.execute(JSON.stringify(arg)).subscribe({
      next: (data) => {
        // this.clientes = data.data;
        this.mesasListSignal.set([...data.data]);
        //console.log('data', JSON.stringify(data.data));
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
      codigo: 6,
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

          //CONSULTAMOS LA MESA INGRESADA
          this.getMesas(nombre);
          this.router.navigate(['/pedidos/mesas']);

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
      codigo: 7,
      usuario: this.authService.usuario.per_cedula,
      parametros: {
        nombre: nombre,
        estado: estado,
        id: this.mesaEditSignal()?.id_mesa,
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
          this.getMesas(nombre);
          this.router.navigate(['/pedidos/mesas']);

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
