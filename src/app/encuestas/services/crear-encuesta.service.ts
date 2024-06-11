import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AppService } from 'src/app/services/app.service';
import { MensajesService } from 'src/shared/helpers/mensajes.service';
import { FormularioInterface, PreguntaInterface, SeccionInterface } from '../interfaces/encuestas.interface';

@Injectable({
  providedIn: 'root',
})
export class CrearEncuestaService {
  private appService = inject(AppService);
  private authService = inject(AuthService);
  private mensajesService = inject(MensajesService);
  private router = inject(Router);


  //signals
  public seccionListSignal = signal<SeccionInterface[]>([

  ]);
  public formulariosListSignal = signal<FormularioInterface[]>([]);
  public preguntaEditarSignal = signal<PreguntaInterface | undefined>(undefined);
  public indexTabSignal = signal<number>(0);
  public estadoTabsSignal = signal<boolean[]>([true]);
  public formularioSelectedSignal = signal<FormularioInterface | undefined>(undefined);



  getFromularios(argumento: string) {
    let arg = {
      codigo: 27,
      usuario: this.authService.usuario.usu_usuario,
      parametros: {
        consulta: argumento, //saca todos
      },
    };
    this.appService.execute(JSON.stringify(arg)).subscribe({
      next: (data) => {
        // this.clientes = data.data;
        this.formulariosListSignal.set([...data.data]);
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
   * 
   * @param nombre 
   * @param grupo 
   */
  saveFromularios(nombre: string, grupo: number) {
    let arg = {
      codigo: 25,
      usuario: this.authService.usuario.usu_usuario,
      parametros: {
        nombre: nombre, //saca todos
        grupo: grupo, //saca todos
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
          this.getFromularios(nombre);
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

  setSecciones(item: FormularioInterface) {
    let tmp = JSON.parse(item.formulario);

    if (tmp[0].secciones) {
     // console.log('con secciones',tmp[0].secciones);
      this.seccionListSignal.set(tmp[0].secciones);
    }
    else {
      let seccion_vacia = [
        {
          sec_uuid: this.mensajesService.getUniqueId(10),
          sec_nombre: "SECCION 1",
          sec_id: 1,
          preguntas: []
        },
      ]
      this.seccionListSignal.set(seccion_vacia);
    }
    //console.log(tmp[0].secciones); 
  }

  /**
   * 
   * @param nombre 
   * @param grupo 
   */
  editFromularios(nombre: string, codigo: number, estado: string) {
    let arg = {
      codigo: 26,
      usuario: this.authService.usuario.usu_usuario,
      parametros: {
        nombre: nombre,
        codigo: codigo,
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
          this.getFromularios(nombre);
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
  saveSeccionesPreguntasOpciones(encabezado: string) {
    let arg = {
      codigo: 28,
      usuario: this.authService.usuario.usu_usuario,
      parametros: {
        encuesta: this.formularioSelectedSignal()?.enc_id,
        encabezado: encabezado,
        data: JSON.stringify(this.seccionListSignal())
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
        //  this.getFromularios(nombre);
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



}