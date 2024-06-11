import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthResponse, Usuario } from '../interfaces/login.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, map, catchError, of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario; //variable para almacenar usuario logueado

  constructor(
    private http: HttpClient
  ) { }

  //acceo publico
  get usuario() {
    return { ...this._usuario };
  }
  login(usuario: string, clave: string) {
    const url = `${this.baseUrl}/login`;
    const argumento = '{ "metodo": "login" , "data": {"usuario": "' + usuario + '", "clave": "' + clave + '" } }';
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    return this.http.post<AuthResponse>(url, argumento, { headers })
      .pipe(
        tap(({ success, data }) => {
          //capturamos el token y guardamos en en local storage
          //console.log('success', success);
          if (success) {
            localStorage.setItem('token', data.token);
            //consultamos datos del usuario ??
            this._usuario = data;
           // console.log('data', this._usuario);
          }

        }),

        map(resp => resp.success),
        catchError(err => of(err.error.data.error))
      );

  }
  validarToken(): Observable<boolean> {
    const url = `${this.baseUrl}/validarToken`;
    const argumento = '{ "metodo": "login" , "data": "OK" }';

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', localStorage.getItem('token') || '');

    //console.log(headers);

    return this.http.post<AuthResponse>(url, argumento, { headers })
      .pipe(
        tap(({ success, data }) => {
          this._usuario = data;
          //console.log(this._usuario);
        }),
        map(resp => {
          //console.log(resp);
          //localStorage.setItem('token', resp.data.token);
          return resp.success;
        }),
        catchError(err => of(err.error.success))
      );

  }
  //salir del sistema
  logout() {
    localStorage.clear();
  }
}
