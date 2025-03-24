import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { PaginatorModule } from 'primeng/paginator';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

import { MessageService } from 'primeng/api';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from '@produz/service/produto.service';
import { UtilModule } from '../../../util/util.module';
import { AnimaisnewRoutingModule } from './animaisnew-routing.module';
import { AnimaisnewComponent } from './animaisnew.component';

@NgModule({
  declarations: [AnimaisnewComponent],
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

    AnimaisnewRoutingModule,
    UtilModule,
  ],
  providers: [MessageService, ProdutoService],
})
export class AnimaisnewModule {}
