import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AppService } from 'src/app/services/app.service';
import { MensajesService } from 'src/shared/helpers/mensajes.service';

@Injectable({
  providedIn: 'root'
})
export class IngresarPedidosService {
  private appService = inject(AppService);
  private authService = inject(AuthService);
  private mensajesService = inject(MensajesService);
  private router = inject(Router);
  //señales
  public mesasEstadoListSignal = signal<any[]>([]);

  constructor() { }

  public getMesasaEstado() {
    let arg = {
      codigo: 8,
      usuario: this.authService.usuario.per_cedula,
      parametros: {

      },
    };
    this.appService.execute(JSON.stringify(arg)).subscribe({
      next: (data) => {
        // this.clientes = data.data;
        this.mesasEstadoListSignal.set([...data.data]);
        console.log('data', JSON.stringify(data.data));
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
