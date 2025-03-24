import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { BadgeModule } from 'primeng/badge';

@NgModule({
  declarations: [InicioComponent],
  imports: [CommonModule, FormsModule, InicioRoutingModule, BadgeModule,],
})
export class InicioModule {}
