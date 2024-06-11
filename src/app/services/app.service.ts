import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  //metodo generico de ejecucion
  execute(argumento: string) {
    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('token') || '');
    return this.http.post<any>(`${this.baseUrl}/execute`, JSON.parse(argumento), { headers });
  }
  //metodo generico de ejecucion
  executePublic(argumento: string) {
    return this.http.post<any>(`${this.baseUrl}/executePublic`, JSON.parse(argumento));
  }

}
