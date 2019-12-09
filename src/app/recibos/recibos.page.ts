import { Component, OnInit } from '@angular/core';
import { RecibosService } from '../servicios/recibos.service'
import { Recibo } from '../models/recibo.model';
import { ModalController, Platform } from '@ionic/angular';
import { NewreciboPage } from "../modals/modalRecibo/newrecibo/newrecibo.page";
import { VerreciboPage } from "../modals/modalRecibo/verrecibo/verrecibo.page";
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recibos',
  templateUrl: './recibos.page.html',
  styleUrls: ['./recibos.page.scss'],
})
export class RecibosPage implements OnInit {

  private platform: Platform;
  private subscription: Subscription;

  ngOnInit() {

    this.recibosService.getRecibos().subscribe(data => {
      this.recibos_ar = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Recibo;
      })
      this.loaded_recibos_ar = this.recibos_ar;
    });

  }

  recibos_ar: Recibo[];
  loaded_recibos_ar: Recibo[];

  constructor(public recibosService: RecibosService,
    private modalController: ModalController,
    public alertController: AlertController) { }

    async openModal() {
      const modal = await this.modalController.create({
        component: NewreciboPage
      });
      return await modal.present();
    }

    async openModalWithData(recibo : Recibo) {
      const modal = await this.modalController.create({
        component: NewreciboPage,
        componentProps: {
          r_id: recibo.id,
          r_numero: recibo.numero,
          r_cliente_nombre: recibo.cliente_nombre,
          r_cajero_nombre: recibo.cajero_nombre,
          r_monto: recibo.monto,
          r_estado: recibo.estado
        }
      });
      return await modal.present();
    }

    async verReciboModal(recibo : Recibo) {
      const modal = await this.modalController.create({
        component: VerreciboPage,
        componentProps: {
          r_id: recibo.id,
          r_numero: recibo.numero,
          r_cliente_nombre: recibo.cliente_nombre,
          r_cajero_nombre: recibo.cajero_nombre,
          r_monto: recibo.monto,
          r_estado: recibo.estado
        }
      });
      return await modal.present();
    }

  initializeItems(): void {
    this.recibos_ar = this.loaded_recibos_ar;
  }

  getFilterRecibos(evt) {
    this.initializeItems();

    const searchTerm = evt.srcElement.value;
    if (!searchTerm) {
      return;
    }

    this.recibos_ar = this.recibos_ar.filter(currentRecibo => {
      if (currentRecibo.numero && searchTerm) {
        if (currentRecibo.numero.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || currentRecibo.cliente_nombre.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || currentRecibo.cajero_nombre.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }

  eliminarRecibo(reciboId: string) {
      this.recibosService.deleteRecibo(reciboId);
  }

  async presentAlertConfirm(reciboId: string) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: '¿Deseas eliminar el recibo?',
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
            this.eliminarRecibo(reciboId);
          }
        }
      ]
    });

    await alert.present();
  }

  ionViewDidEnter(){
    this.subscription = this.platform.backButton.subscribe(()=>{
        navigator['app'].exitApp();
    });
}

ionViewWillLeave(){
    this.subscription.unsubscribe();
}
}
