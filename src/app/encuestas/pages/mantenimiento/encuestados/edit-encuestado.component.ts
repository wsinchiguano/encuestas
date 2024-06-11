import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CargoInterface } from 'src/app/encuestas/interfaces/encuestas.interface';
import { EncuestadosService } from 'src/app/encuestas/services/encuestados.service';
import { AppService } from 'src/app/services/app.service';
import { MensajesService } from 'src/shared/helpers/mensajes.service';

@Component({
    selector: 'app-edit-encuestado',
    templateUrl: './edit-encuestado.component.html',
})
export class EditEncuestadoComponent implements OnInit {
    public encuestadosService = inject(EncuestadosService);
    private authService = inject(AuthService);
    private appService = inject(AppService);

    private fb = inject(FormBuilder);
    private router = inject(Router);
    private mensajesService = inject(MensajesService);
    public itemsCargo: CargoInterface[] = [];

    frmEncuestado: FormGroup = this.fb.group({
        cedula: [,],
        nombre: [,],
        cargo: [,],
        linea: [,],
        estado: [,],
    });
    ngOnInit(): void {
        this.cargarCargos();

        this.frmEncuestado
            .get('cedula')
            ?.setValue(
                this.encuestadosService.encuestadoEditSignal()?.per_cedula
            );
        this.frmEncuestado
            .get('nombre')
            ?.setValue(
                this.encuestadosService.encuestadoEditSignal()?.per_nombre
            );
        this.frmEncuestado
            .get('cargo')
            ?.setValue(
                this.encuestadosService.encuestadoEditSignal()?.car_id
            );
        this.frmEncuestado
            .get('linea')
            ?.setValue(
                this.encuestadosService.encuestadoEditSignal()?.per_linea
            );

        this.frmEncuestado
            .get('estado')
            ?.setValue(
                this.encuestadosService.encuestadoEditSignal()?.per_estado
            );
    }

    itemsEstado: any[] = [
        { label: 'ACTIVO', value: 'A' },
        { label: 'BAJA', value: 'B' },
        // Agrega más opciones según tus necesidades
    ];

    itemsLinea: any[] = [
        { label: 'ADMINISTRACION', value: 'ADMINISTRACION' },
        { label: 'CALIDAD', value: 'CALIDAD' },
        { label: 'OPERATIVA', value: 'OPERATIVA' },
        { label: 'VENTAS', value: 'VENTAS' },
    ];

    // itemsCargo: any[] = [
    //     { label: 'ASESOR COMERCIAL', value: 'ASESOR COMERCIAL' },
    //     {
    //         label: 'ASESOR COMERCIAL Y DE MERCADEO',
    //         value: 'ASESOR COMERCIAL Y DE MERCADEO',
    //     },
    //     {
    //         label: 'ASESOR TECNICO COMERCIAL',
    //         value: 'ASESOR TECNICO COMERCIAL',
    //     },
    //     {
    //         label: 'ASISTENTE ADMINISTRATIVO',
    //         value: 'ASISTENTE ADMINISTRATIVO',
    //     },
    //     {
    //         label: 'ASISTENTE ADMINISTRATIVO CONTABLE',
    //         value: 'ASISTENTE ADMINISTRATIVO CONTABLE',
    //     },
    //     {
    //         label: 'ASISTENTE ADMINISTRATIVO DE IMPORTACIONES',
    //         value: 'ASISTENTE ADMINISTRATIVO DE IMPORTACIONES',
    //     },
    //     {
    //         label: 'ASISTENTE ADMINISTRATIVO E IMPORTACIONES',
    //         value: '	ASISTENTE ADMINISTRATIVO E IMPORTACIONES',
    //     },
    //     { label: 'ASISTENTE CONTABLE', value: 'ASISTENTE CONTABLE' },
    //     { label: 'AYUDANTE DE BODEGA', value: 'AYUDANTE DE BODEGA' },
    //     { label: 'COMMUNITY NAMAGER', value: 'COMMUNITY NAMAGER' },
    //     { label: 'CONTADOR', value: 'CONTADOR' },
    //     { label: 'COODINADOR DE CALIDAD', value: 'COODINADOR DE CALIDAD' },
    //     { label: 'COORDINADOR DE BODEGA', value: 'COORDINADOR DE BODEGA' },
    //     {
    //         label: 'COORDINADOR DE LOGISTICA',
    //         value: 'COORDINADOR DE LOGISTICA',
    //     },
    //     { label: 'DIRECTOR FINANCIERO', value: 'DIRECTOR FINANCIERO' },
    //     { label: 'DISEÑADOR', value: 'DISEÑADOR' },
    //     { label: 'GERENTE GENERAL', value: 'GERENTE GENERAL' },
    //     { label: 'GESTOR DE COBRANZAS', value: 'GESTOR DE COBRANZAS' },
    // ];

    cargarCargos() {
        let arg = {
            codigo: 16,
            usuario: this.authService.usuario.usu_usuario,
            parametros: {
                estado: 'A',
                nombre: '%',
            },
        };
        this.appService.execute(JSON.stringify(arg)).subscribe({
            next: (data) => {
                // this.clientes = data.data;
                this.itemsCargo = [...data.data];
                //console.log('data', JSON.stringify(this.encuestadosListSignal()));
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

    regresar() {
        this.router.navigate(['/encuestas/encuestados']);
    }
    guardar() {
        const { cedula, nombre, cargo, linea, estado } =
            this.frmEncuestado.value;
        if (
            !cedula ||
            !nombre ||
            !cargo ||
            !linea ||
            !estado ||
            cedula.trim() == '' ||
            nombre.trim() == ''
        ) {
            this.mensajesService.msgs(
                'Advertencia!',
                'Ingresar los campos requeridos',
                'warning',
                'OK'
            );
            return;
        }

        if (this.encuestadosService.esNuevoSignal()) {
            //  es nuevo
            this.encuestadosService.insertEncuestado(
                cedula,
                nombre,
                linea,
                cargo
            );
        } else {
            this.encuestadosService.editEncuestado(
                this.encuestadosService.encuestadoEditSignal()?.per_id,
                cedula,
                nombre,
                linea,
                cargo,
                estado,
                this.authService.usuario.usu_usuario
            );
        }
    }
}
