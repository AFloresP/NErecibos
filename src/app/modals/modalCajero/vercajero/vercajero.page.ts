import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-vercajero',
  templateUrl: './vercajero.page.html',
  styleUrls: ['./vercajero.page.scss'],
})
export class VercajeroPage implements OnInit {

  @Input() c_id: string;
  @Input() c_codigo: string;
  @Input() c_nombre: string;
  @Input() c_estado: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalController.dismiss();
  }
  
}
