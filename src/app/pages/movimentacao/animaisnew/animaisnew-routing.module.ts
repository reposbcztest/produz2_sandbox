import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnimaisnewComponent } from './animaisnew.component';

const routes: Routes = [{ path: '', component: AnimaisnewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimaisnewRoutingModule {}
