import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { ResumidoComponent } from '@produz/util/resumido/resumido.component';

@Component({
  selector: 'app-genealogia',
  templateUrl: './genealogia.component.html',
  styleUrls: ['./genealogia.component.css'],
  providers: [DialogService],
})
export class GenealogiaComponent implements OnInit {
  constructor(public dialogService: DialogService) {}

  refResumido: DynamicDialogRef;

  ngOnInit(): void {}

  showModal(item: string) {
    switch (item) {
      case '1':
        this.refResumido = this.dialogService.open(ResumidoComponent, {
          header: 'Cadastro do Produto Resumido',
          width: '45%',
          height: '60%',
          contentStyle: { overflow: 'auto' },
          draggable: true,
          maximizable: true,
        });
        break;
      case '2':
        this.refResumido = this.dialogService.open(ResumidoComponent, {
          header: 'Cadastro do Produto Resumido',
          width: '45%',
          height: '60%',
          contentStyle: { overflow: 'auto' },
          draggable: true,
          maximizable: true,
        });
        break;
      case '3':
        this.refResumido = this.dialogService.open(ResumidoComponent, {
          header: 'Cadastro do Produto Resumido',
          width: '45%',
          height: '60%',
          contentStyle: { overflow: 'auto' },
          draggable: true,
          maximizable: true,
        });
        break;
      case '4':
        this.refResumido = this.dialogService.open(ResumidoComponent, {
          header: 'Cadastro do Produto Resumido',
          width: '45%',
          height: '60%',
          contentStyle: { overflow: 'auto' },
          draggable: true,
          maximizable: true,
        });
        break;
      case '5':
        this.refResumido = this.dialogService.open(ResumidoComponent, {
          header: 'Cadastro do Produto Resumido',
          width: '45%',
          height: '60%',
          contentStyle: { overflow: 'auto' },
          draggable: true,
          maximizable: true,
        });
        break;
      case '6':
        this.refResumido = this.dialogService.open(ResumidoComponent, {
          header: 'Cadastro do Produto Resumido',
          width: '45%',
          height: '60%',
          contentStyle: { overflow: 'auto' },
          draggable: true,
          maximizable: true,
        });
        break;
      case '7':
        this.refResumido = this.dialogService.open(ResumidoComponent, {
          header: 'Cadastro do Produto Resumido',
          width: '45%',
          height: '60%',
          contentStyle: { overflow: 'auto' },
          draggable: true,
          maximizable: true,
        });
        break;
      case '8':
        this.refResumido = this.dialogService.open(ResumidoComponent, {
          header: 'Cadastro do Produto Resumido',
          width: '45%',
          height: '60%',
          contentStyle: { overflow: 'auto' },
          draggable: true,
          maximizable: true,
        });
        break;
      case '9':
        this.refResumido = this.dialogService.open(ResumidoComponent, {
          header: 'Cadastro do Produto Resumido',
          width: '45%',
          height: '60%',
          contentStyle: { overflow: 'auto' },
          draggable: true,
          maximizable: true,
        });
        break;
      case '10':
        this.refResumido = this.dialogService.open(ResumidoComponent, {
          header: 'Cadastro do Produto Resumido',
          width: '45%',
          height: '60%',
          contentStyle: { overflow: 'auto' },
          draggable: true,
          maximizable: true,
        });
        break;
      case '11':
        this.refResumido = this.dialogService.open(ResumidoComponent, {
          header: 'Cadastro do Produto Resumido',
          width: '45%',
          height: '60%',
          contentStyle: { overflow: 'auto' },
          draggable: true,
          maximizable: true,
        });
        break;
      case '12':
        this.refResumido = this.dialogService.open(ResumidoComponent, {
          header: 'Cadastro do Produto Resumido',
          width: '45%',
          height: '60%',
          contentStyle: { overflow: 'auto' },
          draggable: true,
          maximizable: true,
        });
        break;
      case '13':
        this.refResumido = this.dialogService.open(ResumidoComponent, {
          header: 'Cadastro do Produto Resumido',
          width: '45%',
          height: '60%',
          contentStyle: { overflow: 'auto' },
          draggable: true,
          maximizable: true,
        });
        break;
      case '14':
        this.refResumido = this.dialogService.open(ResumidoComponent, {
          header: 'Cadastro do Produto Resumido',
          width: '45%',
          height: '60%',
          contentStyle: { overflow: 'auto' },
          draggable: true,
          maximizable: true,
        });
        break;
      case '15':
        this.refResumido = this.dialogService.open(ResumidoComponent, {
          header: 'Cadastro do Produto Resumido',
          width: '45%',
          height: '60%',
          contentStyle: { overflow: 'auto' },
          draggable: true,
          maximizable: true,
        });
        break;
      default:
        break;
    }
  }
}
