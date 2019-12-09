import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewclientePage } from './newcliente.page';

const routes: Routes = [
  {
    path: '',
    component: NewclientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewclientePageRoutingModule {}
