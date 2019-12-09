import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewreciboPageRoutingModule } from './newrecibo-routing.module';

import { NewreciboPage } from './newrecibo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewreciboPageRoutingModule
  ],
  declarations: [NewreciboPage]
})
export class NewreciboPageModule {}
