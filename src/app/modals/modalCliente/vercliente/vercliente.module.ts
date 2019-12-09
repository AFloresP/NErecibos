import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerclientePageRoutingModule } from './vercliente-routing.module';

import { VerclientePage } from './vercliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerclientePageRoutingModule
  ],
  declarations: [VerclientePage]
})
export class VerclientePageModule {}
