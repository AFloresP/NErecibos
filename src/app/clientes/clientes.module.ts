import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesPageRoutingModule } from './clientes-routing.module';

import { ClientesPage } from './clientes.page';
import { NewclientePage } from "../modals/modalCliente/newcliente/newcliente.page";
import { VerclientePage } from "../modals/modalCliente/vercliente/vercliente.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesPageRoutingModule
  ],
  declarations: [ClientesPage, NewclientePage, VerclientePage],
  entryComponents: [NewclientePage, VerclientePage]
})
export class ClientesPageModule {}
