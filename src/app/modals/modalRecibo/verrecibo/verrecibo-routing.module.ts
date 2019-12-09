import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerreciboPage } from './verrecibo.page';

const routes: Routes = [
  {
    path: '',
    component: VerreciboPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerreciboPageRoutingModule {}
