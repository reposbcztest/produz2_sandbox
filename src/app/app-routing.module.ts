import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { CompletoComponent } from './layout/completo/completo.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { VazioComponent } from './layout/vazio/vazio.component';
import { RelatoriosComponent } from './pages/relatorios/relatorios.component';

// import { RelatoriosComponent } from './pages/relatorios/relatorios.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: VazioComponent,
    children: [
      {
        path: 'login',
        loadChildren: async () =>
          (await import('./pages/login/login.module')).LoginModule,
      },
      {
        path: 'teste',
        component: InicioComponent,
      },
    ],
  },

  { path: 'completo', redirectTo: 'completo/inicio', pathMatch: 'full' },
  {
    path: '',
    component: CompletoComponent,
    children: [
      {
        path: 'completo/inicio',
        loadChildren: async () =>
          (await import('./pages/inicio/inicio.module'))
            .InicioModule,
      },
    ],
  },
  {
    path: 'sistema',
    redirectTo: 'sistema/movimentacao/animais',
    pathMatch: 'full',
  },
  {
    path: '',
    component: VazioComponent,
    children: [
      {
        path: 'sistema/movimentacao/animais',
        loadChildren: async () =>
          (await import('./pages/movimentacao/animais/animais.module'))
            .AnimaisModule,
      },
      {
        path: 'sistema/movimentacao/animaisnew',
        loadChildren: async () =>
          (await import('./pages/movimentacao/animaisnew/animaisnew.module'))
            .AnimaisnewModule,
      },
      {
        path: 'sistema/relatorios',
        loadChildren: async () =>
          (await import('./pages/relatorios/relatorios.module'))
            .RelatoriosModule,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
