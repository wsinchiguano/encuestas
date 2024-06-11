import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root',
})


export class MensajesService {

    /**
     * 
     * @param titulo ejm: Advertencia!
     * @param texto  ejm: 'Completar la evaluación',              
     * @param icono  ejm 'warning success info'                
     * @param textoBoton  ejm:   'OK'
     */
    msgs(titulo: string, texto: string, icono: any, textoBoton: string) {
        Swal.fire({
            title: titulo,
            text: texto,
            icon: icono,
            confirmButtonText: textoBoton,
            confirmButtonColor: '#2898ee',
        });
    }

    getUniqueId(parts: number): string {
        const stringArr = [];
        for (let i = 0; i < parts; i++) {
          // tslint:disable-next-line:no-bitwise
          const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
          stringArr.push(S4);
        }
        return stringArr.join('-');
      }
}