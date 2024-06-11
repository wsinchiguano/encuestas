import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IngresarFormularioService } from 'src/app/ingresar-formulario/service/ingresar-formulario.service';

@Component({
  selector: 'app-ingresar-formulario',
  templateUrl: './ingresar-formulario.component.html',
  styleUrls: ['./ingresar-formulario.component.css']
})
export class IngresarFormularioComponent implements OnInit {
  public route = inject(ActivatedRoute);
  public router = inject(Router);
  public ingresarFormularioService = inject(IngresarFormularioService);


  ngOnInit(): void {

    this.route.params.subscribe(async (params) => {
      //consultamos el uuid
      let result = await this.ingresarFormularioService.getAEvaluar(params['uuid']);

      let longuitud = this.ingresarFormularioService.evaluadosList().length;

      //console.log('ok ', result, longuitud);

      //si existe y no esta ya completado
      if (result == -1) {
        //redirect pagina q ya termino o no existe mas para evaluar
        // this.router.navigateByUrl('ingresarFormulario/default');
        this.ingresarFormularioService.visualizarEncuestadosSignal.set(true);
        return;
      }

      if (longuitud == 0) {
        //redirect pagina q ya termino o no existe mas para evaluar
        // this.router.navigateByUrl('ingresarFormulario/default');
        this.ingresarFormularioService.visualizarEncuestadosSignal.set(true);
        return;
      }
      //presenta todos los formularios asociados a esa personas
      this.ingresarFormularioService.visualizarEncuestadosSignal.set(false);
      this.ingresarFormularioService.uuidSignal.set(params['uuid']);



     // console.log(params['uuid']);
    });



  }

  evaluar(item: any) {
    this.ingresarFormularioService.evaluadoSelectedSignal.set(item);
  //  this.router.navigate(['/ingresarFormulario/',  this.ingresarFormularioService.uuidSignal(), '/contestar-formulario' ]);
    this.router.navigate([`/ingresarFormulario/${this.ingresarFormularioService.uuidSignal()}/contestar-formulario` ]);
  }


}
