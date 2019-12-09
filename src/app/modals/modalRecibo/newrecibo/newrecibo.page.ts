import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { RecibosService } from '../../../servicios/recibos.service'
import { ClientesService } from '../../../servicios/clientes.service'
import { Cliente } from '../../../models/cliente.model';
import { CajerosService } from '../../../servicios/cajeros.service'
import { Cajero } from '../../../models/cajero.model';

@Component({
  selector: 'app-newrecibo',
  templateUrl: './newrecibo.page.html',
  styleUrls: ['./newrecibo.page.scss'],
})
export class NewreciboPage implements OnInit {

  numero: string;
  cliente_nombre: string;
  cajero_nombre: string;
  monto: number;
  estado: string;

  @Input() public r_id: string;
  @Input() public r_numero: string;
  @Input() public r_cliente_nombre: string;
  @Input() public r_cajero_nombre: string;
  @Input() public r_monto: number;
  @Input() public r_estado: string;

  edit_state: boolean;
  title: string;
  text_button: string;
  text_alert: string;

  clientes_ar: Cliente[];
  cajeros_ar: Cajero[];

  constructor(public recibosService: RecibosService,
    private modalController: ModalController,
    public alertController: AlertController,
    public clientesService: ClientesService,
    public cajerosService: CajerosService,) { }

    ngOnInit() {
      this.clientesService.getClientesActivos().subscribe(data => {
        this.clientes_ar = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          } as Cliente;
        })
      });
  
      this.cajerosService.getCajerosActivos().subscribe(data => {
         this.cajeros_ar = data.map(e => {
           return {
             id: e.payload.doc.id,
             ...e.payload.doc.data()
           } as Cajero;
         })
      });

      this.edit_state = !(this.r_id == null);
      if(this.edit_state) {
        this.title = 'Editar Recibo';
        this.text_button = 'Guardar Cambios';
        this.text_alert = 'Se guardaron los cambios';
        this.numero = this.r_numero;
        this.cliente_nombre = this.r_cliente_nombre;
        this.cajero_nombre = this.r_cajero_nombre;
        this.monto = this.r_monto;
        this.estado = this.r_estado;
  
      } else {
        this.title = 'Registrar Recibo';
        this.text_button = 'Registrar';
        this.text_alert = 'Recibo creado';
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
  
    reset_campos() {
      this.numero = "";
      this.cliente_nombre = "";
      this.cajero_nombre = "";
      this.monto = 0;
      this.estado = "Activo";
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
  
    saveRecibo() {
  
      if (this.numero == '' || this.numero == null || this.monto == null || this.cliente_nombre == '' || this.cliente_nombre == null || this.cajero_nombre == '' || this.cajero_nombre == null ) {
        this.validationAlert();
      } else {
        var data = {
          numero: this.numero,
          cliente_nombre: this.cliente_nombre,
          cajero_nombre: this.cajero_nombre,
          monto: this.monto,
          estado: this.estado
        };
  
        if(this.edit_state){
          this.recibosService.updateRecibo(this.r_id, data);
          this.presentAlert();
        } else {
          this.recibosService.createRecibo(data);
        }
        this.modalController.dismiss();
      }
    }

}
