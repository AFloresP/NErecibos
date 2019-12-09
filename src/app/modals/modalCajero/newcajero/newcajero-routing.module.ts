import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewcajeroPage } from './newcajero.page';

const routes: Routes = [
  {
    path: '',
    component: NewcajeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewcajeroPageRoutingModule {}
