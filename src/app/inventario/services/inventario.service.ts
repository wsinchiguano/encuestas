import { Injectable, inject, signal } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AppService } from 'src/app/services/app.service';
import { CategoriaInterface } from '../interfaces/inventario.interface';
import { MensajesService } from 'src/shared/helpers/mensajes.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  private appService = inject(AppService);
  private authService = inject(AuthService);
  private mensajesService = inject(MensajesService);
  private router = inject(Router);


//señales
  public nombreTituloSignal = signal<string>('');
  public categoriaListSignal = signal<CategoriaInterface[]>([]);
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
        this.router.navigateByUrl('/auth');
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
