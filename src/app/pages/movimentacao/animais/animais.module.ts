import { NgModule } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';
import { ImageModule } from 'primeng/image';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { PaginatorModule } from 'primeng/paginator';
import { SidebarModule } from 'primeng/sidebar';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';

import { MessageService } from 'primeng/api';

import { AnimaisComponent } from './animais.component';
import { AnimaisRoutingModule } from './animais-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AnimaisComponent],
  imports: [
    CommonModule,
    FormsModule,

    ToolbarModule,
    TabMenuModule,
    PanelMenuModule,
    TabViewModule,
    MenubarModule,
    ButtonModule,
    DividerModule,
    RippleModule,
    ImageModule,
    TieredMenuModule,
    TooltipModule,
    DropdownModule,
    InputTextModule,
    FieldsetModule,
    CalendarModule,
    CheckboxModule,
    PaginatorModule,
    SidebarModule,
    OrganizationChartModule,
    MenuModule,
    TableModule,
    FileUploadModule,
    HttpClientModule,
    DialogModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    CardModule,

    AnimaisRoutingModule,
  ],
  providers: [MessageService],
})
export class AnimaisModule {}
