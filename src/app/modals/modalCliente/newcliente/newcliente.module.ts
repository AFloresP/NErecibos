import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewclientePageRoutingModule } from './newcliente-routing.module';

import { NewclientePage } from './newcliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewclientePageRoutingModule
  ],
  declarations: [NewclientePage]
})
export class NewclientePageModule {}
