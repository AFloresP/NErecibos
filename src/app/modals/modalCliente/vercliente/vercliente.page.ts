import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-vercliente',
  templateUrl: './vercliente.page.html',
  styleUrls: ['./vercliente.page.scss'],
})
export class VerclientePage implements OnInit {

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
