import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecibosPageRoutingModule } from './recibos-routing.module';

import { RecibosPage } from './recibos.page';
import { NewreciboPage } from "../modals/modalRecibo/newrecibo/newrecibo.page";
import { VerreciboPage } from "../modals/modalRecibo/verrecibo/verrecibo.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecibosPageRoutingModule
  ],
  declarations: [RecibosPage, NewreciboPage, VerreciboPage],
  entryComponents: [NewreciboPage, VerreciboPage]
})
export class RecibosPageModule {}
