import { Component, OnInit } from '@angular/core';
import { CajerosService } from '../servicios/cajeros.service'
import { Cajero } from '../models/cajero.model';
import { ModalController } from '@ionic/angular';
import { NewcajeroPage } from "../modals/modalCajero/newcajero/newcajero.page";
import { VercajeroPage } from "../modals/modalCajero/vercajero/vercajero.page";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cajeros',
  templateUrl: './cajeros.page.html',
  styleUrls: ['./cajeros.page.scss'],
})
export class CajerosPage implements OnInit {

  ngOnInit() {
    this.cajerosService.getCajeros().subscribe(data => {
      this.cajeros_ar = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Cajero;
      })
      this.loaded_cajeros_ar = this.cajeros_ar;
    });

  }

  cajeros_ar: Cajero[];
  loaded_cajeros_ar: Cajero[];

  constructor(public cajerosService: CajerosService,
    private modalController: ModalController,
    public alertController: AlertController) { }

    async openModal() {
      const modal = await this.modalController.create({
        component: NewcajeroPage
      });
      return await modal.present();
    }

    async openModalWithData(cajero : Cajero) {
      const modal = await this.modalController.create({
        component: NewcajeroPage,
        componentProps: {
          c_id: cajero.id,
          c_codigo: cajero.codigo,
          c_nombre: cajero.nombre,
          c_estado: cajero.estado
        }
      });
      return await modal.present();
    }

    async verCajeroModal(cajero : Cajero) {
      const modal = await this.modalController.create({
        component: VercajeroPage,
        componentProps: {
          c_id: cajero.id,
          c_codigo: cajero.codigo,
          c_nombre: cajero.nombre,
          c_estado: cajero.estado
        }
      });
      return await modal.present();
    }

  initializeItems(): void {
    this.cajeros_ar = this.loaded_cajeros_ar;
  }

  getFilterCajeros(evt) {
    this.initializeItems();

    const searchTerm = evt.srcElement.value;
    if (!searchTerm) {
      return;
    }

    this.cajeros_ar = this.cajeros_ar.filter(currentCajero => {
      if (currentCajero.nombre && searchTerm) {
        if (currentCajero.nombre.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || currentCajero.codigo.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }

  eliminarCajero(cajeroId: string) {
      this.cajerosService.deleteCajero(cajeroId);
  }

  async presentAlertConfirm(cajeroId: string) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: '¿Deseas eliminar el cajero?',
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
            this.eliminarCajero(cajeroId);
          }
        }
      ]
    });

    await alert.present();
  }

}