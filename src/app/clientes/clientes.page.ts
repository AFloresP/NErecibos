import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../servicios/clientes.service'
import { Cliente } from '../models/cliente.model';
import { ModalController } from '@ionic/angular';
import { NewclientePage } from "../modals/modalCliente/newcliente/newcliente.page";
import { VerclientePage } from "../modals/modalCliente/vercliente/vercliente.page";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  ngOnInit() {
    this.clientesService.getClientes().subscribe(data => {
      this.clientes_ar = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Cliente;
      })
      this.loaded_clientes_ar = this.clientes_ar;
    });
  }

  clientes_ar: Cliente[];
  loaded_clientes_ar: Cliente[];

  constructor(public clientesService: ClientesService,
    private modalController: ModalController,
    public alertController: AlertController) { }

    async openModal() {
      const modal = await this.modalController.create({
        component: NewclientePage
      });
      return await modal.present();
    }

    async openModalWithData(cliente : Cliente) {
      const modal = await this.modalController.create({
        component: NewclientePage,
        componentProps: {
          c_id: cliente.id,
          c_codigo: cliente.codigo,
          c_nombre: cliente.nombre,
          c_estado: cliente.estado
        }
      });
      return await modal.present();
    }

    async verClienteModal(cliente : Cliente) {
      const modal = await this.modalController.create({
        component: VerclientePage,
        componentProps: {
          c_id: cliente.id,
          c_codigo: cliente.codigo,
          c_nombre: cliente.nombre,
          c_estado: cliente.estado
        }
      });
      return await modal.present();
    }

  initializeItems(): void {
    this.clientes_ar = this.loaded_clientes_ar;
  }

  getFilterClientes(evt) {
    this.initializeItems();

    const searchTerm = evt.srcElement.value;
    if (!searchTerm) {
      return;
    }

    this.clientes_ar = this.clientes_ar.filter(currentCliente => {
      if (currentCliente.nombre && searchTerm) {
        if (currentCliente.nombre.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || currentCliente.codigo.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }

  eliminarCliente(clienteId: string) {
    this.clientesService.deleteCliente(clienteId);
  }

  async presentAlertConfirm(clienteId: string) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: '¿Deseas eliminar el cliente?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            //console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.eliminarCliente(clienteId);
          }
        }
      ]
    });

    await alert.present();
  }

}
