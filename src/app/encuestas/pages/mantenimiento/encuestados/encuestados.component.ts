import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EncuestadoInterface } from 'src/app/encuestas/interfaces/encuestas.interface';
import { EncuestadosService } from 'src/app/encuestas/services/encuestados.service';

@Component({
    selector: 'app-encuestados',
    templateUrl: './encuestados.component.html',
})
export class EncuestadosComponent {
    public encuestadosService = inject(EncuestadosService);

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
        this.encuestadosService.getEncuestados(argumento);
    }

    nuevo() {
        this.encuestadosService.encuestadoEditSignal.set(undefined);
        this.encuestadosService.esNuevoSignal.set(true);
        this.encuestadosService.nombreTituloSignal.set('NUEVO ENCUESTADO');
        this.router.navigate(['/encuestas/edit-encuestado']);
    }
    reset() {
        this.encuestadosService.encuestadosListSignal.set([]);
        this.frmBusqueda.reset();
    }
    editar(item: EncuestadoInterface) {
        this.encuestadosService.encuestadoEditSignal.set(item);
        this.encuestadosService.esNuevoSignal.set(false);
        this.encuestadosService.nombreTituloSignal.set('EDITAR ENCUESTADO');
        this.router.navigate(['/encuestas/edit-encuestado']);
    }
    asignar(item: EncuestadoInterface){
        this.encuestadosService.encuestadoEditSignal.set(item);
        this.encuestadosService.nombreTituloSignal.set('ASIGNAR ENCUESTADO');
        this.encuestadosService.getAsignados();
        this.router.navigate(['/encuestas/asign-encuestado']);
    }
}
