import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { IntCategoria } from '@produz/interfaces/IntCategoria';
import { IntFazenda } from '@produz/interfaces/IntFazenda';
import { IntProprietario } from '@produz/interfaces/IntProprietario';
import { IntRaca } from '@produz/interfaces/IntRaca';
import { IntSexo } from '@produz/interfaces/IntSexo';
import { EnumSexo } from '@produz/enum/EnumSexo';
import { IntTipoProduto } from '@produz/interfaces/IntTipoProduto';
import { EnumSimNao } from '@produz/enum/EnumSimNao';
import { IntNomeProduto } from '@produz/interfaces/IntNomeProduto';

@Component({
  selector: 'app-resumido',
  templateUrl: './resumido.component.html',
  styleUrls: ['./resumido.component.css'],
})
export class ResumidoComponent implements OnInit {
  itemsMenu: MenuItem[] = [];

  serie: String = '';
  rgn: String = '';
  rgd: String = '';

  proprietarios: IntProprietario[];
  proprietarioSelecionado: IntProprietario;

  fazendas: IntFazenda[];
  fazendaSelecionada: IntFazenda;

  racas: IntRaca[];
  racaSelecionada: IntRaca;

  categorias: IntCategoria[];
  categoriaSelecionada: IntCategoria;

  sexos: IntSexo[];
  sexoSelecionado: IntSexo;

  tiposProduto: IntTipoProduto[];
  tipoProdutoSelecionado?: IntTipoProduto;

  nomeProduto: IntNomeProduto;

  constructor() {
    this.proprietarios = [
      //TODO: Preencher com infos da Tabela
      { cod: '1', name: '1 | Suporte Teste' },
      { cod: '2', name: '2 | Outro Suporte' },
      { cod: '3', name: '3 | Mais um Suporte' },
      { cod: '4', name: '4 | Suporte Real Oficial' },
    ];

    this.fazendas = [
      //TODO: Preencher com infos da Tabela
      { cod: '1', name: '1 | Fazenda' },
      { cod: '2', name: '2 | Outra Fazenda' },
      { cod: '3', name: '3 | Mais uma Fazenda' },
      { cod: '4', name: '4 | Fazenda Real Oficial' },
    ];

    this.racas = [
      //TODO: Preencher com infos da Tabela
      {
        cod: '1',
        sigla: 'GIM',
        siglaABCZ: 'GIM',
        nome: 'GIR MOCHA',
        nomeFiltro: '1 | GIM',
      },
      {
        cod: '2',
        sigla: 'GIR',
        siglaABCZ: 'GIR',
        nome: 'GIR',
        nomeFiltro: '2 | GIR',
      },
      {
        cod: '3',
        sigla: 'GUZ',
        siglaABCZ: 'GUZ',
        nome: 'GUZERA',
        nomeFiltro: '3 | GUZ',
      },
      {
        cod: '4',
        sigla: 'IND',
        siglaABCZ: 'IND',
        nome: 'INDUBRASIL',
        nomeFiltro: '4 | IND',
      },
      {
        cod: '5',
        sigla: 'NEL',
        siglaABCZ: 'NEL',
        nome: 'NELORE',
        nomeFiltro: '5 | NEL',
      },
      {
        cod: '6',
        sigla: 'NEM',
        siglaABCZ: 'NEM',
        nome: 'NELORE MOCHA',
        nomeFiltro: '6 | NEM',
      },
      {
        cod: '7',
        sigla: 'SID',
        siglaABCZ: 'SID',
        nome: 'SINDI',
        nomeFiltro: '7 | SID',
      },
      {
        cod: '8',
        sigla: 'TAB',
        siglaABCZ: 'TAB',
        nome: 'TABAPUA',
        nomeFiltro: '8 | TAB',
      },
      {
        cod: '10',
        sigla: 'CAN',
        siglaABCZ: 'CAN',
        nome: 'CANGAIAN',
        nomeFiltro: '10 | CAN',
      },
      {
        cod: '11',
        sigla: 'SIM',
        siglaABCZ: 'SIM',
        nome: 'SINDI MOCHA',
        nomeFiltro: '11 | SIM',
      },
      {
        cod: '14',
        sigla: 'BRA',
        siglaABCZ: 'BRA',
        nome: 'BRAHMAN',
        nomeFiltro: '14 | BRA',
      },
      {
        cod: '20',
        sigla: 'N.IMP',
        siglaABCZ: 'N.IMP',
        nome: 'NELORE IMPORTADO',
        nomeFiltro: '20 | N',
      },
      {
        cod: '23',
        sigla: 'BRAM',
        siglaABCZ: 'BRAM',
        nome: 'BRAHMAN MOCHA',
        nomeFiltro: '23 | BRAM',
      },
      {
        cod: '30',
        sigla: 'REC',
        siglaABCZ: 'REC',
        nome: 'RECEPTORA',
        nomeFiltro: '30 | REC',
      },
      {
        cod: '56',
        sigla: 'RECZB',
        siglaABCZ: 'RECZB',
        nome: 'RECEPTORA ZEBUINA',
        nomeFiltro: '56 | RECZB',
      },
      {
        cod: '69',
        sigla: 'RECNZ',
        siglaABCZ: 'RECNZ',
        nome: 'RECEPTORA NAO ZEBUINA',
        nomeFiltro: '69 | RECNZ',
      },
      {
        cod: '292',
        sigla: 'CGP',
        siglaABCZ: 'CGP',
        nome: 'COMPOSIÇÃO GENETICA PRESUMIDA',
        nomeFiltro: '292 | CGP',
      },
    ];

    this.categorias = [
      //TODO: Preencher com infos da Tabela
      {
        cod: '1',
        sigla: 'PO',
        siglaABCZ: 'PO',
        nome: 'PURO DE ORIGEM',
        nomeFiltro: '1 | PO',
      },
      {
        cod: '2',
        sigla: 'RES',
        siglaABCZ: 'RES',
        nome: 'RESERVADO',
        nomeFiltro: '2 | RES',
      },
      {
        cod: '3',
        sigla: 'PC',
        siglaABCZ: 'PC',
        nome: 'PURO POR CONTROLE',
        nomeFiltro: '3 | PC',
      },
      {
        cod: '4',
        sigla: 'SR',
        siglaABCZ: 'SR',
        nome: 'SEM REGISTRO',
        nomeFiltro: '4 | SR',
      },
      {
        cod: '5',
        sigla: 'RZ',
        siglaABCZ: 'RZ',
        nome: 'RECEPTORA ZEBUINA',
        nomeFiltro: '5 | RZ',
      },
      {
        cod: '8',
        sigla: 'MEST',
        siglaABCZ: 'MEST',
        nome: 'MESTICA',
        nomeFiltro: '8 | MEST',
      },
      {
        cod: '9',
        sigla: 'CCG',
        siglaABCZ: 'CCG',
        nome: 'CONTROLE GENEALOGIA',
        nomeFiltro: '9 | CCG',
      },
      {
        cod: '11',
        sigla: 'PA',
        siglaABCZ: 'PA',
        nome: 'PURO POR AVALIACAO',
        nomeFiltro: '11 | PA',
      },
    ];

    this.sexos = [
      { cod: '1', name: EnumSexo.F },
      { cod: '2', name: EnumSexo.M },
    ];

    this.tiposProduto = [
      //TODO: Preencher com infos da Tabela
      { name: 'COMUM', cod: '1' },
      { name: 'DOADORA', cod: '2' },
      { name: 'RECEPTORA', cod: '3' },
      { name: 'GENEALOGIA', cod: '4' },
      { name: 'REPRODUTOR', cod: '5' },
      { name: 'COMERCIAL', cod: '6' },
    ];

    this.nomeProduto = {
      cod: 0,
      codProduto: 1,
      prefixo: ' ',
      nome: '',
      sufixo: ' ',
      padrao: EnumSimNao.S,
    };
  }

  ngOnInit() {
    this.itemsMenu = [
      {
        // label: 'Salvar',
        icon: 'pi pi-fw pi-save',
        tooltipOptions: { tooltipLabel: 'Salvar' },
      },
      {
        // label: 'Cancelar',
        icon: 'pi pi-fw pi-times',
        tooltipOptions: {
          tooltipLabel: 'Cancelar',
        },
      },
    ];
  }
}
