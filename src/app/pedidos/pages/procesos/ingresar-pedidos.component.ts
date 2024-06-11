import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MensajesService } from 'src/shared/helpers/mensajes.service';
import { TextosService } from 'src/shared/helpers/textos.service';
import { IngresarPedidosService } from '../../services/ingresar-pedidos.service';

@Component({
  selector: 'app-ingresar-pedidos',
  templateUrl: './ingresar-pedidos.component.html',
  styleUrls: ['./ingresar-pedidos.component.css'],
})
export class IngresarPedidosComponent implements OnInit {

  public ingresarPedidosService = inject(IngresarPedidosService);

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private mensajesService = inject(MensajesService);
  private textosService = inject(TextosService)

  tables = [
    {
      name: "MESA 1",
      estado: "LIBRE",
      color: "bg-success text-white"
    },
    {
      name: "MESA 3",
      estado: "OCUPADO",
      color: "bg-success text-white"
    },
    {
      name: "MESA 4",
      estado: "OCUPADO",
      color: "bg-danger text-white"
    },
    {
      name: "MESA 5",
      estado: "OCUPADO",
      color: "bg-warning text-white"
    },
    // ...
  ];


  ngOnInit(): void {
    this.ingresarPedidosService.getMesasaEstado();
  }


  seleccionar() {

  }
}
