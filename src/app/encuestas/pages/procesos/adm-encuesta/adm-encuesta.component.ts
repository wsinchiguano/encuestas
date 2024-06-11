import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { GrupoEncuestaInterface } from 'src/app/encuestas/interfaces/encuestas.interface';
import { AppService } from 'src/app/services/app.service';
import { MensajesService } from 'src/shared/helpers/mensajes.service';

@Component({
    selector: 'app-adm-encuesta',
    templateUrl: './adm-encuesta.component.html',
})
export class AdmEncuestaComponent {
    private fb = inject(FormBuilder);
    private router = inject(Router);
    private mensajesService = inject(MensajesService);
    private appService = inject(AppService);
    private authService = inject(AuthService);

    //FORMULARIOS
    frmBusqueda: FormGroup = this.fb.group({
        argBusqueda: [, [Validators.required]],
    });
    frmNuevaGrupoEncuesta: FormGroup = this.fb.group({
        nombre: [, [Validators.required]],
    });

    // listas
    grupoEncuestasList: GrupoEncuestaInterface[] = [];
    nuevaGrupoEncuestaDialog: boolean = false;

    consultar() {
        const { argBusqueda } = this.frmBusqueda.value;
        this.cargarGrupoEncuestas(argBusqueda);
    }
    reset() {
        this.frmBusqueda.reset();
        this.grupoEncuestasList = [];
    }
    nuevo() {
        this.frmNuevaGrupoEncuesta.reset();
        this.nuevaGrupoEncuestaDialog = true;
    }
    guardar() {
        const { nombre } = this.frmNuevaGrupoEncuesta.value;
        if (!nombre || nombre.trim() == '') {
            this.nuevaGrupoEncuestaDialog = false;
            this.mensajesService.msgs(
                'Advertencia!',
                'Ingresar los campos requeridos',
                'warning',
                'OK'
            );
            return;
        }
    }
    resultados(item: GrupoEncuestaInterface) {
        let arg = {
            codigo: 21,
            usuario: this.authService.usuario.usu_usuario,
            parametros: {
                empresa: item.gru_id,
            },
        };
        this.appService.execute(JSON.stringify(arg)).subscribe({
            next: (data) => {
                // this.clientes = data.data;
                //this.grupoEncuestasList = [...data.data];
                //console.log('data', data.data);
                this.exportExcel('resultados', [...data.data]);
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
    avance(item: GrupoEncuestaInterface) {
        let arg = {
            codigo: 20,
            usuario: this.authService.usuario.usu_usuario,
            parametros: {
                empresa: item.gru_id,
            },
        };
        this.appService.execute(JSON.stringify(arg)).subscribe({
            next: (data) => {
                // this.clientes = data.data;
                //this.grupoEncuestasList = [...data.data];
                //console.log('data', data.data);
                this.exportExcel('avance', [...data.data]);
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

    cargarGrupoEncuestas(argBusqueda: string) {
     
        let argumento = '%';
        if (argBusqueda) {
            argumento = argBusqueda;
        }
        let arg = {
            codigo: 19,
            usuario: this.authService.usuario.usu_usuario,
            parametros: {
                estado: '%', //saca todos
                nombre: argumento,
            },
        };
        this.appService.execute(JSON.stringify(arg)).subscribe({
            next: (data) => {
                // this.clientes = data.data;
                this.grupoEncuestasList = [...data.data];
                // console.log('data', data.data);
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

    cambiarEstado(item: GrupoEncuestaInterface) {

    }

    exportExcel(nombreArchivo: string, data: any[]) {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(data);
            const workbook = {
                Sheets: { data: worksheet },
                SheetNames: ['data'],
            };
            const excelBuffer: any = xlsx.write(workbook, {
                bookType: 'xlsx',
                type: 'array',
            });
            //console.log(excelBuffer);
            this.saveAsExcelFile(excelBuffer, nombreArchivo);
        });
    }

    saveAsExcelFile(buffer: any, fileName: string): void {
        let EXCEL_TYPE =
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        let EXCEL_EXTENSION = '.xlsx';
        const data: Blob = new Blob([buffer], {
            type: EXCEL_TYPE,
        });
        saveAs(
            data,
            fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
        );
    }
}
