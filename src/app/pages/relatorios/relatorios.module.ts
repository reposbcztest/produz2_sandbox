import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

import { RelatoriosComponent } from './relatorios.component';
import { RelatoriosRoutingModule } from './relatorios-routing.module';

@NgModule({
  declarations: [RelatoriosComponent],
  imports: [
    CommonModule,
    FormsModule,
    DividerModule,
    ButtonModule,
    RelatoriosRoutingModule,
  ],
})
export class RelatoriosModule {}
