import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VercajeroPageRoutingModule } from './vercajero-routing.module';

import { VercajeroPage } from './vercajero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VercajeroPageRoutingModule
  ],
  declarations: [VercajeroPage]
})
export class VercajeroPageModule {}
