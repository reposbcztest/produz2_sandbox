import { Component, OnInit } from '@angular/core';
import { IntDocumentosAbertos } from '@produz/interfaces/IntDocumentosAbertos';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-documentos-abertos',
  templateUrl: './documentos-abertos.component.html',
  styleUrls: ['./documentos-abertos.component.css'],
})
export class DocumentosAbertosComponent implements OnInit {
  opcoesAba1!: string;
  // opcoesAba2: string[] = [];

  // Resultado da busca de Documentos Abertos
  documentosAbertos: IntDocumentosAbertos[];

  constructor(public config: DynamicDialogConfig) {}

  ngOnInit(): void {
    this.opcoesAba1 = 'td';
    this.selecionaFiltro();
    this.config.header =
      this.config.header +
      ' - Existem XX documentos abertos. XX podem gerar multa';
  }

  selecionaFiltro() {
    switch (this.opcoesAba1) {
      case 'td':
        this.buscaDocumentosAbertos();
        break;
      case 'cn':
        this.documentosAbertos = null;
        break;
      case 'dd':
        this.documentosAbertos = null;
        break;
      default:
        this.documentosAbertos = null;
        break;
    }
  }

  buscaDocumentosAbertos() {
    // Busca os Documentos Abertos e atribui à documentosAbertos. Passar o resultado para UpperCase.
    this.documentosAbertos = [
      {
        codCriador: '1',
        nomCriador: 'SUPORTE TESTE',
        nomFazenda: 'A FAZENDA SEDE',
        nomDocumento: 'ADT - VENDAS',
        mes: '6',
        ano: '2023',
        numero: '21',
        raca: 'NEL',
        categoria: 'PO',
      },
      {
        codCriador: '1',
        nomCriador: 'SUPORTE TESTE',
        nomFazenda: 'A FAZENDA SEDE',
        nomDocumento: 'CDC - ARTIFICIAL',
        mes: '6',
        ano: '2023',
        numero: 'A NUMERAR',
        raca: 'NEL',
        categoria: 'PO',
      },
      {
        codCriador: '1',
        nomCriador: 'SUPORTE TESTE',
        nomFazenda: 'A FAZENDA SEDE',
        nomDocumento: 'TEF - TRANSF. ENTRE FAZENDAS',
        mes: '6',
        ano: '2023',
        numero: '21',
        raca: 'NEL',
        categoria: 'PO',
      },
      {
        codCriador: '1',
        nomCriador: 'SUPORTE TESTE',
        nomFazenda: 'A FAZENDA SEDE',
        nomDocumento: 'ADT - VENDAS',
        mes: '6',
        ano: '2023',
        numero: '21',
        raca: 'NEL',
        categoria: 'PO',
      },
      {
        codCriador: '1',
        nomCriador: 'SUPORTE TESTE',
        nomFazenda: 'A FAZENDA SEDE',
        nomDocumento: 'ADT - VENDAS',
        mes: '6',
        ano: '2023',
        numero: 'A NUMERAR',
        raca: 'NEL',
        categoria: 'PO',
      },
      {
        codCriador: '1',
        nomCriador: 'SUPORTE TESTE',
        nomFazenda: 'A FAZENDA SEDE',
        nomDocumento: 'TEF - TRANSF. ENTRE FAZENDAS',
        mes: '6',
        ano: '2023',
        numero: '21',
        raca: 'NEL',
        categoria: 'PO',
      },
      ,
      {
        codCriador: '1',
        nomCriador: 'SUPORTE TESTE',
        nomFazenda: 'A FAZENDA SEDE',
        nomDocumento: 'CDC - NASCIMENTOS',
        mes: '6',
        ano: '2023',
        numero: '21',
        raca: 'NEL',
        categoria: 'PO',
      },
      ,
      {
        codCriador: '1',
        nomCriador: 'SUPORTE TESTE',
        nomFazenda: 'A FAZENDA SEDE',
        nomDocumento: 'TEF - TRANSF. ENTRE FAZENDAS',
        mes: '6',
        ano: '2023',
        numero: '21',
        raca: 'NEL',
        categoria: 'PO',
      },
      ,
      {
        codCriador: '1',
        nomCriador: 'SUPORTE TESTE',
        nomFazenda: 'A FAZENDA SEDE',
        nomDocumento: 'CDC - NASCIMENTOS',
        mes: '6',
        ano: '2023',
        numero: '21',
        raca: 'NEL',
        categoria: 'PO',
      },
      {
        codCriador: '1',
        nomCriador: 'SUPORTE TESTE',
        nomFazenda: 'A FAZENDA SEDE',
        nomDocumento: 'ADT - VENDAS',
        mes: '6',
        ano: '2023',
        numero: '21',
        raca: 'NEL',
        categoria: 'PO',
      },
      {
        codCriador: '1',
        nomCriador: 'SUPORTE TESTE',
        nomFazenda: 'A FAZENDA SEDE',
        nomDocumento: 'CDC - ARTIFICIAL',
        mes: '6',
        ano: '2023',
        numero: 'A NUMERAR',
        raca: 'NEL',
        categoria: 'PO',
      },
    ];
  }

  mostraInfo() {
    const btn = document.getElementById('btnAjuda');
    btn.blur();
  }
}
