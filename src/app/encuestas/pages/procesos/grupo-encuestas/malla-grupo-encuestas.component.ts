import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as saveAs from 'file-saver';
import { PlantillaCompetenciasInterface } from 'src/app/encuestas/interfaces/encuestas.interface';
import { GrupoEncuestasService } from 'src/app/encuestas/services/grupo-encuestas.service';
import { MensajesService } from 'src/shared/helpers/mensajes.service';

@Component({
  selector: 'app-malla-grupo-encuestas',
  templateUrl: './malla-grupo-encuestas.component.html',
  styleUrls: ['./malla-grupo-encuestas.component.css']
})
export class MallaGrupoEncuestasComponent implements OnInit {

  public grupoEncuestasService = inject(GrupoEncuestasService);
  private fb = inject(FormBuilder);
  private mensajesService = inject(MensajesService);



  public dlgAsignarEvaluadoresVisible: boolean = false;
  public relacionList: any[] = [
    {
      label: 'SUPERIOR',
      id: 'su'
    },
    {
      label: 'SUBALTERNO',
      id: 'sub'
    },
    {
      label: 'CLIENTE INTERNO',
      id: 'ci'
    },
    {
      label: 'PAR',
      id: 'pa'
    },
    // {
    //   label: 'AUTOEVALUACION',
    //   id: 'au'
    // }
  ];

  public evaluadoresRelacionList: any[] = [];

  //formularios
  frmEvaluadorRelacion: FormGroup = this.fb.group({
    evaluador: [, [Validators.required]],
    relacion: [, [Validators.required]],
  });

  public personaSelected!: PlantillaCompetenciasInterface;


  ngOnInit(): void {
    this.personaSelected = {
      nombre_empleado: '',
      cedula: '',
      correo: '',
      cargo: '',
      competencias: '',
      nivel_de_competencia_requerido: '',
      departamento: '',
      area: '',
    }
  }
  seleccionarEvaluado(item: PlantillaCompetenciasInterface) {
    this.personaSelected = item;
    this.evaluadoresRelacionList = [];
    let tmp = JSON.stringify(item.evaluadores);
    if (tmp == undefined) {

    }
    else {
      let evaluadores = JSON.parse(tmp);
      this.evaluadoresRelacionList = evaluadores;

    }
    //mostramos el dialogo
    this.dlgAsignarEvaluadoresVisible = true;
    console.log();

  }

  asignarEvaluador() {
    const { evaluador, relacion } = this.frmEvaluadorRelacion.value;
    if (this.personaSelected.cedula == evaluador.cedula) {
      this.mensajesService.msgs(
        'Advertencia!',
        'No se puede asignarse a si mismo',
        'warning',
        'OK'
      );
      this.dlgAsignarEvaluadoresVisible = false;
      return;
    }


    this.evaluadoresRelacionList.push({
      cedula_eva: evaluador.cedula,
      nombre_empleado: evaluador.nombre_empleado,
      relacion_codigo: relacion.id,
      relacion_nombre: relacion.label
    })

    this.frmEvaluadorRelacion.reset();
    // console.log(this.evaluadoresRelacionList);

  }

  eliminarEvaluador(item: any) {
    let indice = this.evaluadoresRelacionList.findIndex(evaluador => item.cedula == evaluador.cedula);
    if (indice !== -1) {
      this.evaluadoresRelacionList.splice(indice, 1);
    } else {
      console.log('nose elimino');

    }

  }

  guardarEvaluador() {
    this.personaSelected.evaluadores = this.evaluadoresRelacionList;
    this.dlgAsignarEvaluadoresVisible = false;
  }

  exportar() {
    const flattenedData = this.flattenData(this.grupoEncuestasService.plantillaExcel());
    this.exportExcel('malla_evaluadores', flattenedData)
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

  /**
   * 
   * @param data convierte varias filas en una sola fila con datos que se repiten
   * @returns 
   */
  flattenData(data: any[]): any[] {
    const flattenedData: any[] = [];
    data.forEach(employee => {
      if (employee.evaluadores && employee.evaluadores.length) {
        employee.evaluadores.forEach((evaluator: any) => {
          flattenedData.push({
            nombre_empleado: employee.nombre_empleado,
            cedula: employee.cedula,
            correo: employee.correo,
            cargo: employee.cargo,
            competencias: employee.competencias,
            nivel_de_competencia_requerido: employee.nivel_de_competencia_requerido,
            departamento: employee.departamento,
            area: employee.area,
            evaluador_cedula: evaluator.cedula_eva,
            evaluador_nombre_empleado: evaluator.nombre_empleado,
            evaluador_relacion_codigo: evaluator.relacion_codigo,
            evaluador_relacion_nombre: evaluator.relacion_nombre
          });
        });
      } else {
        flattenedData.push({
          nombre_empleado: employee.nombre_empleado,
          cedula: employee.cedula,
          correo: employee.correo,
          cargo: employee.cargo,
          competencias: employee.competencias,
          nivel_de_competencia_requerido: employee.nivel_de_competencia_requerido,
          departamento: employee.departamento,
          area: employee.area,
          evaluador_cedula: '',
          evaluador_nombre_empleado: '',
          evaluador_relacion_codigo: '',
          evaluador_relacion_nombre: ''
        });
      }
    });
    return flattenedData;
  }

  iniciar() {

    this.grupoEncuestasService.saveAsignacionEvaluador();
    this.grupoEncuestasService.indexTabSignal.set(4);
    this.grupoEncuestasService.estadoTabsSignal.set([false, false, false, false]);

  }
}
