import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerreciboPageRoutingModule } from './verrecibo-routing.module';

import { VerreciboPage } from './verrecibo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerreciboPageRoutingModule
  ],
  declarations: [VerreciboPage]
})
export class VerreciboPageModule {}
