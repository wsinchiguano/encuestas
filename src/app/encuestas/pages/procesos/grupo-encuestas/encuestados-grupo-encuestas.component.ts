import { Component, inject } from '@angular/core';
import { PlantillaCompetenciasInterface } from 'src/app/encuestas/interfaces/encuestas.interface';
import { GrupoEncuestasService } from 'src/app/encuestas/services/grupo-encuestas.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-encuestados-grupo-encuestas',
  templateUrl: './encuestados-grupo-encuestas.component.html',
  styleUrls: ['./encuestados-grupo-encuestas.component.css']
})
export class EncuestadosGrupoEncuestasComponent {
  public grupoEncuestasService = inject(GrupoEncuestasService);

  //jsonData: PlantillaCompetenciasInterface[] = [];

  onFileSelect(event: any): void {
    const file: File = event.files[0];

    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      // Asumimos que el primer hoja es la que queremos
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      // Convertir a JSON
      // this.jsonData = XLSX.utils.sheet_to_json(ws);
      //this.grupoEncuestasService.plantillaExcel.set(XLSX.utils.sheet_to_json(ws));
      this.grupoEncuestasService.loadPlantilla(XLSX.utils.sheet_to_json(ws));
      //console.log(this.jsonData);
    };
    reader.readAsBinaryString(file);
  }

  continuar() {
    this.grupoEncuestasService.savePlantilla();
    this.grupoEncuestasService.indexTabSignal.set(2);
    this.grupoEncuestasService.estadoTabsSignal.set([false, false, true, true]);

  }

  eliminarArchivo() {
    this.grupoEncuestasService.estadoTabsSignal.set([false, true, true, true]);
    this.grupoEncuestasService.plantillaExcel.set([]);
  }
}
