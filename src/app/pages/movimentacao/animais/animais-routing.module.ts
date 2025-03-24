import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnimaisComponent } from './animais.component';

const routes: Routes = [{ path: '', component: AnimaisComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimaisRoutingModule {}
