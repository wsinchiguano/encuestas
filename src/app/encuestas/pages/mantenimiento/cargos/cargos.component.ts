import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CargoInterface } from 'src/app/encuestas/interfaces/encuestas.interface';
import { CargosService } from 'src/app/encuestas/services/cargos.service';

@Component({
    selector: 'app-cargos',
    templateUrl: './cargos.component.html',
})
export class CargosComponent {
    public cargosService = inject(CargosService);

    private fb = inject(FormBuilder);
    private router = inject(Router);

    //FORMULARIOS
    frmBusqueda: FormGroup = this.fb.group({
        argBusqueda: [, [Validators.required]],
    });

    consultar() {
        const { argBusqueda } = this.frmBusqueda.value;
        let argumento = '%';
        if (argBusqueda) {
            argumento = argBusqueda;
        }
        this.cargosService.getCargos(argumento);
    }

    nuevo() {
      this.cargosService.esNuevoSignal.set(true);
      this.cargosService.nombreTituloSignal.set('NUEVO CARGO');
      this.router.navigate(['/encuestas/edit-cargo']);
    }

    reset() {
        this.cargosService.cargosListSignal.set([]);
        this.frmBusqueda.reset();
    }
    editar(item: CargoInterface) {
      this.cargosService.cargoSelectedSignal.set(item);
      this.cargosService.esNuevoSignal.set(false);
      this.cargosService.nombreTituloSignal.set('EDITAR CARGO');
      this.router.navigate(['/encuestas/edit-cargo']);
    }
}
