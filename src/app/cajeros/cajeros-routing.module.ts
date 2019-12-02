import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CajerosPage } from './cajeros.page';

const routes: Routes = [
  {
    path: '',
    component: CajerosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CajerosPageRoutingModule {}
