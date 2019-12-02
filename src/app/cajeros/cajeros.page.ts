import { Component, OnInit } from '@angular/core';
import { CajerosService } from '../servicios/cajeros.service'
import { Cajero } from '../models/cajero.model';

@Component({
  selector: 'app-cajeros',
  templateUrl: './cajeros.page.html',
  styleUrls: ['./cajeros.page.scss'],
})
export class CajerosPage implements OnInit {
s
  codigo: string;
  nombre: string;
  estado: string;

  cajeros_ar: Cajero[];

  constructor(public cajerosService: CajerosService) { }

  ngOnInit() {
    this.reset_campos();

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
    this.codigo = "";
    this.nombre = "";
    this.estado = "Activo";
  }

  registrarCajero() {

    var data = {
      codigo: this.codigo,
      nombre: this.nombre,
      estado: this.estado
    };
    this.cajerosService.createCajero(data);
    this.reset_campos();
    //console.log(data);
  }

  eliminarCajero(cajeroId: string) {
      this.cajerosService.deleteCajero(cajeroId);
  }

}