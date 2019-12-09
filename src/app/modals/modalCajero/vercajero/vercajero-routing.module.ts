import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VercajeroPage } from './vercajero.page';

const routes: Routes = [
  {
    path: '',
    component: VercajeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VercajeroPageRoutingModule {}
