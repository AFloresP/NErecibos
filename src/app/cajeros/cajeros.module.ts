import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CajerosPageRoutingModule } from './cajeros-routing.module';

import { CajerosPage } from './cajeros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CajerosPageRoutingModule
  ],
  declarations: [CajerosPage]
})
export class CajerosPageModule {}
