import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-verrecibo',
  templateUrl: './verrecibo.page.html',
  styleUrls: ['./verrecibo.page.scss'],
})
export class VerreciboPage implements OnInit {

  @Input() public r_id: string;
  @Input() public r_numero: string;
  @Input() public r_cliente_nombre: string;
  @Input() public r_cajero_nombre: string;
  @Input() public r_monto: number;
  @Input() public r_estado: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

}
