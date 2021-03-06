import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CajerosPageRoutingModule } from './cajeros-routing.module';

import { CajerosPage } from './cajeros.page';
import { NewcajeroPage } from "../modals/modalCajero/newcajero/newcajero.page";
import { VercajeroPage } from "../modals/modalCajero/vercajero/vercajero.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CajerosPageRoutingModule
  ],
  declarations: [CajerosPage, NewcajeroPage, VercajeroPage],
  entryComponents: [NewcajeroPage, VercajeroPage]
})
export class CajerosPageModule {}
