import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';

import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { DocumentosAbertosComponent } from './documentos-abertos/documentos-abertos.component';
import { GenealogiaComponent } from './genealogia/genealogia.component';
import { PesquisaSerieComponent } from './pesquisa-serie/pesquisa-serie.component';
import { ResumidoComponent } from './resumido/resumido.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@NgModule({
  declarations: [
    ResumidoComponent,
    GenealogiaComponent,
    PesquisaSerieComponent,
    DocumentosAbertosComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,

    MenuModule,
    MenubarModule,
    TieredMenuModule,
    DropdownModule,
    InputTextModule,
    DropdownModule,
    CardModule,
    ButtonModule,
    TableModule,
    TabViewModule,
    DividerModule,
    RadioButtonModule,
    OverlayPanelModule,
  ],
})
export class UtilModule {}
