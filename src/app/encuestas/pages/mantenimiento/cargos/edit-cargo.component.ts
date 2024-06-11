import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CargosService } from 'src/app/encuestas/services/cargos.service';
import { MensajesService } from 'src/shared/helpers/mensajes.service';

@Component({
    selector: 'app-edit-cargo',
    templateUrl: './edit-cargo.component.html',
})
export class EditCargoComponent implements OnInit {
    public cargosService = inject(CargosService);

    private authService = inject(AuthService);

    private fb = inject(FormBuilder);
    private router = inject(Router);
    private mensajesService = inject(MensajesService);

    //FORMULARIOS
    frmCargo: FormGroup = this.fb.group({
        nombre: [, [Validators.required]],
        estado: [, [Validators.required]],
    });

    itemsEstado: any[] = [
        { label: 'ACTIVO', value: 'A' },
        { label: 'INACTIVO', value: 'I' },
        // Agrega más opciones según tus necesidades
    ];

    ngOnInit(): void {
        this.frmCargo
            .get('estado')
            ?.setValue(this.cargosService.cargoSelectedSignal()?.car_estado);
        this.frmCargo
            .get('nombre')
            ?.setValue(this.cargosService.cargoSelectedSignal()?.car_nombre);
    }

    regresar() {
        this.frmCargo.reset();
        this.cargosService.cargoSelectedSignal.set(undefined);
        this.router.navigate(['/encuestas/cargos']);
    }
    guardar() {
        const { nombre, estado } = this.frmCargo.value;
        if (!nombre || !estado || nombre.trim() == '') {
            this.mensajesService.msgs(
                'Advertencia!',
                'Ingresar los campos requeridos',
                'warning',
                'OK'
            );
            return;
        }

        if (this.cargosService.esNuevoSignal()) {
            this.cargosService.insertCargo(nombre);
            this.cargosService.cargoSelectedSignal.set(undefined);
            this.frmCargo.reset();
        } else {
            this.cargosService.editCargo(
                this.cargosService.cargoSelectedSignal()?.car_id,
                nombre,
                estado
            );
            this.cargosService.cargoSelectedSignal.set(undefined);
            this.frmCargo.reset();
        }
    }
}
