import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewcajeroPageRoutingModule } from './newcajero-routing.module';

import { NewcajeroPage } from './newcajero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewcajeroPageRoutingModule
  ],
  declarations: [NewcajeroPage]
})
export class NewcajeroPageModule {}
