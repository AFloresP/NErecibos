import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { CajerosService } from '../../../servicios/cajeros.service'

@Component({
  selector: 'app-newcajero',
  templateUrl: './newcajero.page.html',
  styleUrls: ['./newcajero.page.scss'],
})
export class NewcajeroPage implements OnInit {

  codigo: string;
  nombre: string;
  estado: string;

  @Input() public c_id: string;
  @Input() public c_codigo: string;
  @Input() public c_nombre: string;
  @Input() public c_estado: string;

  edit_state: boolean;
  title: string;
  text_button: string;
  text_alert: string;

  constructor(public cajerosService: CajerosService,
    private modalController: ModalController,
    public alertController: AlertController) { }


  ngOnInit() {
    this.edit_state = !(this.c_id == null);
    if(this.edit_state) {
      this.title = 'Editar Cajero';
      this.text_button = 'Guardar Cambios';
      this.text_alert = 'Se guardaron los cambios';
      this.codigo = this.c_codigo;
      this.nombre = this.c_nombre;
      this.estado = this.c_estado;

    } else {
      this.title = 'Registrar Cajero';
      this.text_button = 'Registrar';
      this.text_alert = 'Cajero creado';
      this.estado = 'Activo';
    }
  }

  async closeModal() {
    await this.modalController.dismiss();
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      //header: 'Alert',
      //subHeader: 'Subtitle',
      message: this.text_alert,
      buttons: ['OK']
    });

    await alert.present();
  }

  async validationAlert() {
    const alert = await this.alertController.create({
      //header: 'Alert',
      //subHeader: 'Subtitle',
      message: 'Llenar campos obligatorios',
      buttons: ['OK']
    });

    await alert.present();
  }

  reset_campos() {
    this.codigo = "";
    this.nombre = "";
    this.estado = "Activo";
  }

  saveCajero() {

    if (this.codigo == '' || this.codigo == null || this.nombre == '' || this.nombre == null) {
      this.validationAlert();
    } else {
      var data = {
        codigo: this.codigo,
        nombre: this.nombre,
        estado: this.estado
      };
  
      if(this.edit_state){
        this.cajerosService.updateCajero(this.c_id, data);
        this.presentAlert();
      } else {
        this.cajerosService.createCajero(data);
      }
      this.reset_campos();
      this.modalController.dismiss();
    }

  }



}
