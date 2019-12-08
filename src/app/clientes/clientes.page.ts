import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../servicios/clientes.service'
import { Cliente } from '../models/cliente.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  codigo: string;
  nombre: string;
  estado: string;

  clientes_ar: Cliente[];

  constructor(public clientesService: ClientesService) { }

  ngOnInit() {
    this.reset_campos();

    this.clientesService.getClientes().subscribe(data => {
      this.clientes_ar = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Cliente;
      })
    });
  }

  reset_campos() {
    this.codigo = "";
    this.nombre = "";
    this.estado = "Activo";
  }

  registrarCliente() {

    var data = {
      codigo: this.codigo,
      nombre: this.nombre,
      estado: this.estado
    };
    this.clientesService.createCliente(data);
    this.reset_campos();
    //console.log(data);
  }

  eliminarCliente(clienteId: string) {
      this.clientesService.deleteCliente(clienteId);
  }

  actualizarEstadoCliente(cliente: Cliente, estado: String) {
    var data = {
      codigo: cliente.codigo,
      nombre: cliente.nombre,
      estado: estado,
    };
    this.clientesService.updateCliente(cliente.id, data);
  }

}
