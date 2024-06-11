import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MensajesService } from 'src/shared/helpers/mensajes.service';
import { TextosService } from 'src/shared/helpers/textos.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  miFormulario: FormGroup = this.fb.group({
    username: [, [Validators.required]],
    password: [, [Validators.required]],
  })

  constructor(
    private fb: FormBuilder,
    private mensajesService: MensajesService,
    private authService: AuthService,
    private router: Router,
    private textosService: TextosService,

  ) {}
  login(){

    //verificamos si lso campos estan llenos
    if (!this.miFormulario.valid) {

      this.mensajesService.msgs('Advertencia!', 'Ingresar los campos requeridos', 'warning', 'OK');
      return;
    }
      //desestructuramos el formualario
      const { username, password } = this.miFormulario.value;
      this.authService.login(username, password)
        .subscribe(ok => {
         // console.log('paso', ok);
          if (ok === true) {
            this.router.navigateByUrl('/inicio');
          } else {
  
            this.mensajesService.msgs('Error!', ok, 'error', 'OK');
  
          }
        });
  }

  changeTextToUppercase(field: string) {
    this.textosService.changeTextToUppercase(this.miFormulario, field);
   }

}
