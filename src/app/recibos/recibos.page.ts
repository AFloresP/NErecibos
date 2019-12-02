import { Component, OnInit } from '@angular/core';
import { RecibosService } from '../servicios/recibos.service'
import { Recibo } from '../models/recibo.model';
import { ClientesService } from '../servicios/clientes.service'
import { Cliente } from '../models/cliente.model';
import { CajerosService } from '../servicios/cajeros.service'
import { Cajero } from '../models/cajero.model';

@Component({
  selector: 'app-recibos',
  templateUrl: './recibos.page.html',
  styleUrls: ['./recibos.page.scss'],
})
export class RecibosPage implements OnInit {

  numero: string;
  cliente_nombre: string;
  cajero_nombre: string;
  monto: number;
  estado: string;

  recibos_ar: Recibo[];
  clientes_ar: Cliente[];
  cajeros_ar: Cajero[];

  constructor(public recibosService: RecibosService,
    public clientesService: ClientesService,
    public cajerosService: CajerosService) { }

  ngOnInit() {
    this.reset_campos();

    this.recibosService.getRecibos().subscribe(data => {
      this.recibos_ar = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Recibo;
      })
    });

    this.clientesService.getClientes().subscribe(data => {
      this.clientes_ar = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Cliente;
      })
    });

    this.cajerosService.getCajeros().subscribe(data => {
      this.cajeros_ar = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Cajero;
      })
    });
  }

  reset_campos() {
    this.numero = "";
    this.cliente_nombre = "";
    this.cajero_nombre = "";
    this.monto = 0;
    this.estado = "Activo";
  }

  registrarRecibo() {

    var data = {
      numero: this.numero,
      cliente_nombre: this.cliente_nombre,
      cajero_nombre: this.cajero_nombre,
      monto: this.monto,
      estado: this.estado
    };
    this.recibosService.createRecibo(data);
    this.reset_campos();
    //console.log(data);
  }

  eliminarRecibo(reciboId: string) {
      this.recibosService.deleteRecibo(reciboId);
  }


}
