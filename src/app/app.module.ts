import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  CompletoComponent,
  SafePipe
} from '@produz/layout/completo/completo.component';
import { VazioComponent } from '@produz/layout/vazio/vazio.component';
import { BadgeModule } from 'primeng/badge';

@NgModule({
  declarations: [AppComponent, CompletoComponent, VazioComponent, SafePipe],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    RippleModule,
    MenubarModule,
    TabMenuModule,
    TabViewModule,
    ButtonModule,
    BadgeModule,
    DialogModule,
    DropdownModule,
    CheckboxModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
