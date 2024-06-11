import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> | boolean {
    return this.authService.validarToken()
    .pipe(
      tap(valid => {
        //console.log('canActivate');
        if (!valid) {
            this.router.navigateByUrl('/auth/login');
          }
        })
      );
  }

  canLoad(): Observable<boolean> | boolean {
  
    return this.authService.validarToken()
      .pipe(
        tap(valid => {
          //console.log('canLoad', valid);
          if (!valid) {
            this.router.navigateByUrl('/auth/login');
          }
        })
      );
  }
  
}
