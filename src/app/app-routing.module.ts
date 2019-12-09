import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recibos',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'cajeros',
    loadChildren: () => import('./cajeros/cajeros.module').then( m => m.CajerosPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'recibos',
    loadChildren: () => import('./recibos/recibos.module').then( m => m.RecibosPageModule)
  },
  {
    path: 'newcajero',
    loadChildren: () => import('./modals/modalCajero/newcajero/newcajero.module').then( m => m.NewcajeroPageModule)
  },
  {
    path: 'vercajero',
    loadChildren: () => import('./modals/modalCajero/vercajero/vercajero.module').then( m => m.VercajeroPageModule)
  },
  {
    path: 'vercliente',
    loadChildren: () => import('./modals/modalCliente/vercliente/vercliente.module').then( m => m.VerclientePageModule)
  },
  {
    path: 'newcliente',
    loadChildren: () => import('./modals/modalCliente/newcliente/newcliente.module').then( m => m.NewclientePageModule)
  },
  {
    path: 'newrecibo',
    loadChildren: () => import('./modals/modalRecibo/newrecibo/newrecibo.module').then( m => m.NewreciboPageModule)
  },
  {
    path: 'verrecibo',
    loadChildren: () => import('./modals/modalRecibo/verrecibo/verrecibo.module').then( m => m.VerreciboPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
