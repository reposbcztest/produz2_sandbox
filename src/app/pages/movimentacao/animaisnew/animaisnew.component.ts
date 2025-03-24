import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService, TreeNode } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

// Interface
import { IntCategoria } from '@produz/interfaces/IntCategoria';
import { IntCategoriaIdade } from '@produz/interfaces/IntCategoriaIdade';
import { IntClassEpmuras } from '@produz/interfaces/IntClassEpmuras';
import { IntClassificacao } from '@produz/interfaces/IntClassificacao';
import { IntClassificacaoPMGZC } from '@produz/interfaces/IntClassificacaoPMGZC';
import { IntCriador } from '@produz/interfaces/IntCriador';
import { IntFazenda } from '@produz/interfaces/IntFazenda';
import { IntNomeProduto } from '@produz/interfaces/IntNomeProduto';
import { IntOcorrenciaReprod } from '@produz/interfaces/IntOcorrenciaReprod';
import { IntOrigem } from '@produz/interfaces/IntOrigem';
import { IntPelagem } from '@produz/interfaces/IntPelagem';
import { IntProprietario } from '@produz/interfaces/IntProprietario';
import { IntRaca } from '@produz/interfaces/IntRaca';
import { IntSexo } from '@produz/interfaces/IntSexo';
import { IntSimNao } from '@produz/interfaces/IntSimNao';
import { IntSituacaoReprod } from '@produz/interfaces/IntSituacaoReprod';
import { IntStatus } from '@produz/interfaces/IntStatus';
import { IntTipoParto } from '@produz/interfaces/IntTipoParto';
import { IntTipoProduto } from '@produz/interfaces/IntTipoProduto';

// Enum
import { EnumSexo } from '@produz/enum/EnumSexo';
import { EnumSimNao } from '@produz/enum/EnumSimNao';
import { IntProduto } from '@produz/interfaces/IntProduto';

import { ResumidoComponent } from '@produz/util/resumido/resumido.component';
import { GenealogiaComponent } from '@produz/util/genealogia/genealogia.component';

//Service
import { ProdutoService } from '@produz/service/produto.service';

@Component({
  selector: 'app-animaisnew',
  templateUrl: './animaisnew.component.html',
  styleUrls: ['./animaisnew.component.css'],
  providers: [DialogService],
})
export class AnimaisnewComponent implements OnInit {
  displayServicosAdicionais: boolean = false; //Variável que controla se o menu de servios adicionais esta aberto ou não
  habilitado: boolean = true; //Variável que controla se os campos estão habilitados ou não

  mostrarUpload: boolean = false;
  mostrarCard: boolean = false;
  mostrarGenealogia: boolean = false;

  refResumido: DynamicDialogRef;
  refGenealogia: DynamicDialogRef;

  itemsMenu: MenuItem[] = [];
  itemsServicosAdicionais: MenuItem[] = [];
  dataGenealogia: TreeNode[] = [];

  produtos: IntProduto[] = [];

  registrosPorPagina: number;
  produtoSelecionado?: IntProduto;

  mostraTelaResumida: boolean = false;

  //--- Campos da Tela ---//
  tiposProduto: IntTipoProduto[];
  tipoProdutoSelecionado?: IntTipoProduto;

  registro: string = '';

  deca: string = '';
  iABCZ: string = '';
  F: string = '';

  classificacoesPMGZC: IntClassificacaoPMGZC[];
  classificacaoPMGZCSelecionado?: IntClassificacaoPMGZC;

  comercialPMGZC: string = '';

  serie: string = '';

  racas: IntRaca[];
  racaSelecionada: IntRaca;

  categorias: IntCategoria[];
  categoriaSelecionada: IntCategoria;

  proprietarios: IntProprietario[];
  proprietarioSelecionado: IntProprietario;

  fazendas: IntFazenda[];
  fazendaSelecionada: IntFazenda;

  criadores: IntCriador[];
  criadorSelecionado: IntCriador;

  rgn: string = '';
  rgd: string = '';
  sexos: IntSexo[];
  sexoSelecionado: EnumSexo;
  apelido: string = '';
  brinco: string = '';

  nomeProduto?: IntNomeProduto;

  pelagens: IntPelagem[];
  pelagemSelecionada: IntPelagem;
  pn: string = '';

  dataNasc?: Date;
  idadeDias: number;
  idadeMeses: number;
  idadeExtensa: string = '';
  categoriasIdade: IntCategoriaIdade[];
  categoriaIdadeSelecionada: IntCategoriaIdade;

  // calculoAutomatico: boolean = false;

  dataJulg?: Date;
  dataJulgamentoExtensa: string = '';
  sisbov: string = '';
  situacoes: string = '';

  status: IntStatus[];
  statusSelecionado: IntStatus;

  situacoesReprodutivas: IntSituacaoReprod[];
  situacaoReprodutivaDoAnimal: IntSituacaoReprod;

  grupoManejo: string = '';
  cdcOrigem: string = '';
  cdnOrigem: string = '';
  epmuras: IntClassEpmuras[];
  epmurasSelecionado: string;

  cdnCorrigir: boolean = false;
  marcadoImprimir: boolean = false;

  racaSelecionadaPai: IntRaca;
  categoriaSelecionadaPai: IntCategoria;
  seriePai: string = '';
  rgnPai: string = '';
  rgdPai: string = '';

  racaSelecionadaMae: IntRaca;
  categoriaSelecionadaMae: IntCategoria;
  serieMae: string = '';
  rgnMae: string = '';
  rgdMae: string = '';

  origens: IntOrigem[];
  origemSelecionada: IntOrigem;
  ocorrenciasReprod: IntOcorrenciaReprod[];
  ocorrenciaReprodSelecionada: IntOcorrenciaReprod;
  minhasClassificacoes: IntClassificacao[];
  minhaClassificacaoSelecionada: IntClassificacao;

  receptora: string = '';
  tipagens: IntSimNao[];
  tipagemSelecionada: IntSimNao;
  ponderais: IntSimNao[];
  ponderalSelecionado: IntSimNao;
  tiposParto: IntTipoParto[];
  tipoPartoSelecionado: IntTipoParto;
  possuiDNAs: IntSimNao[];
  possuiDNASelecionado: IntSimNao;

  nomePai: string = '';
  nomeMae: string = '';

  headerCard: string = '';

  nomeAvoPaterno: string = '';
  nomeAvohPaterna: string = '';
  nomeAvoMaterno: string = '';
  nomeAvoMaterna: string = '';

  nomePaiAvoPaterno: string = '';
  nomeMaeAvoPaterno: string = '';
  nomePaiAvohPaterno: string = '';
  nomeMaeAvohPaterno: string = '';
  nomePaiAvoMaterno: string = '';
  nomeMaeAvoMaterno: string = '';
  nomePaiAvohMaterno: string = '';
  nomeMaeAvohMaterno: string = '';

  constructor(
    private messageService: MessageService,
    public dialogService: DialogService,
    private produtoService: ProdutoService
  ) {
    // carregarComponentes(); //TODO: Montar função que busca e preenche os dados

    this.registrosPorPagina = 5;

    this.tiposProduto = [
      //TODO: Preencher com infos da Tabela
      { name: 'COMUM', cod: '1' },
      { name: 'DOADORA', cod: '2' },
      { name: 'RECEPTORA', cod: '3' },
      { name: 'GENEALOGIA', cod: '4' },
      { name: 'REPRODUTOR', cod: '5' },
      { name: 'COMERCIAL', cod: '6' },
    ];

    this.classificacoesPMGZC = [
      { name: 'A', cod: '1' },
      { name: 'B', cod: '2' },
      { name: 'C', cod: '3' },
      { name: 'D', cod: '4' },
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

    this.criadores = [
      //TODO: Preencher com infos da Tabela
      { cod: '1', name: '0 | Genealogia' },
      { cod: '2', name: '2 | Outro Criador' },
      { cod: '3', name: '3 | Mais um Criador' },
      { cod: '4', name: '4 | Criador Real Oficial' },
    ];

    this.criadores = [
      //TODO: Preencher com infos da Tabela
      { cod: '1', name: '0 | Genealogia' },
      { cod: '2', name: '2 | Outro Criador' },
      { cod: '3', name: '3 | Mais um Criador' },
      { cod: '4', name: '4 | Criador Real Oficial' },
    ];

    this.sexos = [
      { cod: '1', name: EnumSexo.F },
      { cod: '2', name: EnumSexo.M },
    ];

    this.pelagens = [
      //TODO: Preencher com infos da Tabela
      { cod: '1', name: 'AM | AMARELA' },
      { cod: '2', name: 'AMAL | AMARELA ALARANJADA' },
      { cod: '3', name: 'AMCH | AMARELA CHITADA' },
      { cod: '4', name: 'AMGA | AMARELA GARGANTILHA' },
      { cod: '5', name: 'AMMA | AMARELA MALHADA' },
      { cod: '6', name: 'BR | BRANCA' },
      { cod: '7', name: 'BRMA | BRANCA MALHADA' },
      { cod: '8', name: 'BRPI | BRANCO PINTADO' },
      { cod: '9', name: 'CA | CASTANHA' },
      { cod: '10', name: 'CTPI | CASTANHO PINTADO' },
      { cod: '11', name: 'CHCL | CHITA CLARA' },
      { cod: '12', name: 'CHAM | CHITADA DE AMARELO' },
      { cod: '13', name: 'CHCZ | CHITADA DE CINZA' },
      { cod: '14', name: 'CHVM | CHITADA DE VERMELHO' },
      { cod: '15', name: 'CZ | CINZA' },
      { cod: '16', name: 'CZAM | CINZA AMARELA' },
      { cod: '17', name: 'CZCH | CINZA CHITADA' },
      { cod: '18', name: 'CZCL | CINZA CLARA' },
      { cod: '19', name: 'CZEC | CINZA ESCURA' },
      { cod: '20', name: 'CZGA | CINZA GARGANTILHA' },
      { cod: '21', name: 'CZPI | CINZA PINTADO' },
      { cod: '22', name: 'CZVM | CINZA VERMELHA' },
      { cod: '23', name: 'MN | MANCHADA' },
      { cod: '24', name: 'MOCL | MOURA CLARA' },
      { cod: '25', name: 'MOVM | MOURA DE VERMELHO' },
      { cod: '26', name: 'MOEC | MOURA ESCURA' },
      { cod: '27', name: 'NAO | NAO INFORMADA' },
      { cod: '28', name: 'PIAM | PINTADA DE AMARELO' },
      { cod: '29', name: 'PIPR | PINTADA DE PRETO' },
      { cod: '30', name: 'PIBR | PINTADO DE BRANCO' },
      { cod: '31', name: 'PIVM | PINTADO DE VERMELHO' },
      { cod: '32', name: 'PR | PRETA' },
      { cod: '33', name: 'PRMA | PRETA MALHADA' },
      { cod: '34', name: 'ROCL | ROSILHA CLARA' },
      { cod: '35', name: 'VM | VERMELHA' },
      { cod: '36', name: 'VMCH | VERMELHA CHITADA' },
      { cod: '37', name: 'VMGA | VERMELHA GARGANTILHA' },
      { cod: '38', name: 'VMMA | VERMELHA MALHADA' },
    ];

    this.categoriasIdade = [
      //TODO: Preencher com infos da Tabela
      { cod: '1', name: 'BEZERRA MAMANDO' },
      { cod: '2', name: 'BEZERRA' },
      { cod: '3', name: 'NOVILHA MENOR' },
      { cod: '4', name: 'NOVILHA MAIOR' },
      { cod: '5', name: 'VACA JOVEM' },
      { cod: '6', name: 'VACA ADULTA' },
      { cod: '7', name: 'BEZERRO MAMANDO' },
      { cod: '8', name: 'BEZERRO' },
      { cod: '9', name: 'JUNIOR MENOR' },
      { cod: '10', name: 'JUNIOR MAIOR' },
      { cod: '11', name: 'TOURO JOVEM' },
      { cod: '12', name: 'TOURO SENIOR' },
    ];

    this.origens = [
      //TODO: Preencher com infos da Tabela
      { cod: '0', name: 'IMPORTADO' },
      { cod: '1', name: 'REBANHO' },
      { cod: '2', name: 'COMPRA' },
      { cod: '3', name: 'RECEPTORA' },
      { cod: '4', name: 'DOAÇÃO' },
      { cod: '5', name: 'GENEALOGIA' },
      { cod: '7', name: 'NASCIMENTO' },
      { cod: '8', name: 'OUTRAS' },
      { cod: '9', name: 'COMERCIAL ' },
    ];

    this.ocorrenciasReprod = [
      //TODO: Preencher com infos da Tabela
      { cod: '0', name: 'ABO | ABORTO' },
      { cod: '1', name: 'ANEST | VACA EM ANESTRO' },
      { cod: '2', name: 'D | DESCLASSIFICADO' },
      { cod: '3', name: 'NORMAL | NORMAL' },
      { cod: '4', name: 'NTZ | NATIMORTO' },
      { cod: '5', name: 'REFUGO | REFUGADO' },
    ];

    this.minhasClassificacoes = [
      //TODO: Preencher com infos da Tabela
      { cod: '0', name: 'SUPERIOR' },
      { cod: '1', name: 'INFERIOR' },
      { cod: '2', name: 'ELITE' },
      { cod: '3', name: 'REGULAR' },
      { cod: '4', name: 'RUIM' },
    ];

    this.tipagens = [
      { cod: '1', name: EnumSimNao.S },
      { cod: '2', name: EnumSimNao.N },
    ];

    this.ponderais = [
      { cod: '1', name: EnumSimNao.S },
      { cod: '2', name: EnumSimNao.N },
    ];

    this.possuiDNAs = [
      { cod: '1', name: EnumSimNao.S },
      { cod: '2', name: EnumSimNao.N },
    ];

    this.tiposParto = [
      { cod: '1', name: 'NATURAL' },
      { cod: '2', name: 'NATURAL INDUZIDO' },
      { cod: '3', name: 'INTERVENÇÃO CIRÚRGICA' },
      { cod: '4', name: 'PARTO COM AUXÍLIO' },
    ];

    this.situacoesReprodutivas = [
      { cod: '0', name: 'LIVRE' },
      { cod: '1', name: 'EM SERVIÇOS' },
      { cod: '2', name: 'PRENHE' },
      { cod: '3', name: 'CRIA AO PÉ' },
    ];

    this.status = [
      { cod: '0', name: 'ATIVO' },
      { cod: '1', name: 'BAIXADO' },
      { cod: '2', name: 'GENEALOGIA' },
    ];

    this.epmuras = [
      { cod: '0', name: 'INFERIOR' },
      { cod: '1', name: 'REGULAR' },
      { cod: '2', name: 'BOM' },
      { cod: '3', name: 'MUITO BOM' },
      { cod: '4', name: 'EXCELENTE' },
    ];

    this.tipoProdutoSelecionado = this.tiposProduto[0]; //TODO: Preencher com o [tipo do animal]
    if (this.tipoProdutoSelecionado.name === 'RECEPTORA') {
      // Mudar o valor SEMPRE de acordo com o tipo do produto
      this.mostraTelaResumida = true;
    } else {
      this.mostraTelaResumida = false;
    }
  }

  ngOnInit() {
    this.itemsMenu = [
      {
        icon: 'pi pi-fw pi-file',
        tooltipOptions: {
          tooltipLabel: 'Novo',
        },
      },
      {
        // label: 'Editar',
        icon: 'pi pi-fw pi-file-edit',
        command: (event) => {
          this.habilitado = false;
        },
        tooltipOptions: {
          tooltipLabel: 'Editar',
        },
      },
      {
        // label: 'Salvar',
        icon: 'pi pi-fw pi-save',
        disabled: true,
        tooltipOptions: { tooltipLabel: 'Salvar' },
      },
      {
        // label: 'Excluir',
        icon: 'pi pi-fw pi-trash',
        tooltipOptions: {
          tooltipLabel: 'Excluir',
        },
      },
      {
        // label: 'Cancelar',
        icon: 'pi pi-fw pi-times',
        command: (event) => {
          this.habilitado = true;
        },
        tooltipOptions: {
          tooltipLabel: 'Cancelar',
        },
      },
      {
        // label: 'Ordenar',
        icon: 'pi pi-fw pi-sort-alt',
        tooltipOptions: { tooltipLabel: 'Ordenar' },
      },
      {
        // label: 'Filtros e Consultas',
        icon: 'pi pi-fw pi-filter',
        tooltipOptions: { tooltipLabel: 'Filtros e Consultas' },
      },
      {
        // label: 'Localizar Animal',
        icon: 'pi pi-fw pi-search',
        tooltipOptions: { tooltipLabel: 'Localizar Animal' },
      },
      {
        // label: 'Pesquisar na ABCZ',
        icon: 'pi pi-fw pi-server',
        tooltipOptions: { tooltipLabel: 'Pesquisar na ABCZ' },
      },
      {
        // label: 'Visualizar Histórico',
        icon: 'pi pi-fw pi-history',
        tooltipOptions: { tooltipLabel: 'Visualizar Histórico' },
      },
    ];

    this.itemsServicosAdicionais = [
      {
        label: 'Pesos e Medidas',
        items: [
          { label: 'EPMURAS/PHRAS' },
          { label: 'Circunferências Escrotal' },
          { label: 'Pesagens deste Animal' },
          { label: 'Pesos Calculados do Animal' },
        ],
      },
      {
        label: 'Dados Reprodutivos',
        items: [
          { label: 'Ficha Reprodutiva do Animal' },
          { label: 'Ficha Individual do Animal' },
          { label: 'Relação de CDC' },
          { label: 'Controle de Cios' },
          { label: 'Histórico SErviços/Filhos Receptora' },
          { label: 'Relação de Abortos' },
          { label: 'Informações sobre a Criação do Animal' },
          { label: 'Árvore Genealógica' },
          { label: 'Relatório Produtivo' },
        ],
      },
      { label: 'Filhos', items: [{ label: 'Relação de Filhos' }] },
      {
        label: 'Serviços Adicionais',
        items: [
          { label: 'Histórico de Alteração' },
          { label: 'Inclusão de Ocorrências' },
          { label: 'Situações' },
          { label: 'Informações sobre Comercialização do Animal' },
          { label: 'Grupo de Manejo do Animal' },
          { label: 'Medicamentos Recebidos Pelo Animal' },
          { label: 'Morte Individual' },
          { label: 'Foto' },
          { label: 'Comentários e Observações' },
          { label: 'Sincronização de Receptoras/Matrizes' },
        ],
      },
      {
        label: 'Genealogia',
        command: () => {
          this.showModal('genealogia');
        },
      },
    ];

    this.dataGenealogia = [
      {
        label: this.nomeProduto?.nome,
        expanded: true,
        children: [
          {
            label: this.nomePai,
            expanded: true,
            children: [
              {
                label: this.nomeAvoPaterno,
                expanded: true,
                children: [
                  { label: this.nomePaiAvoPaterno, expanded: true },
                  { label: this.nomeMaeAvoPaterno, expanded: true },
                ],
              },
              {
                label: this.nomeAvohPaterna,
                expanded: true,
                children: [
                  { label: this.nomePaiAvohPaterno, expanded: true },
                  { label: this.nomeMaeAvohPaterno, expanded: true },
                ],
              },
            ],
          },
          {
            label: this.nomeMae,
            expanded: true,
            children: [
              {
                label: this.nomeAvoMaterno,
                expanded: true,
                children: [
                  { label: this.nomePaiAvoMaterno, expanded: true },
                  { label: this.nomeMaeAvoMaterno, expanded: true },
                ],
              },
              {
                label: this.nomeAvoMaterna,
                expanded: true,
                children: [
                  { label: this.nomePaiAvohMaterno, expanded: true },
                  { label: this.nomeMaeAvohMaterno, expanded: true },
                ],
              },
            ],
          },
        ],
      },
    ];

    this.carregarProdutos();
  }

  onRowSelect() {
    alert('Produto selecionado: ' + this.produtoSelecionado?.nomeProduto.nome);
  }

  carregarProdutos() {
    this.produtos = this.produtoService.buscaProduto();

    this.registro = this.produtos[0].registro;
    this.deca = this.produtos[0].deca;
    this.iABCZ = this.produtos[0].iABCZ;
    this.F = this.produtos[0].F;

    // this.comercialPMGZC = this.produtos[0].comercialPMGZC;
    // this.classificacaoPMGZCSelecionado = this.produtos[0].classificacaoPMGZCSelecionado;
    this.comercialPMGZC = EnumSimNao.N;
    this.classificacaoPMGZCSelecionado = this.classificacoesPMGZC[0];

    this.serie = this.produtos[0].serie;
    this.racaSelecionada = this.produtos[0].raca;

    this.categoriaSelecionada = this.produtos[0].categoria;

    this.proprietarioSelecionado = this.produtos[0].proprietario;
    this.fazendaSelecionada = this.produtos[0].fazenda;
    this.criadorSelecionado = this.produtos[0].criador;

    this.rgn = this.produtos[0].rgn;
    this.rgd = this.produtos[0].rgd;
    this.sexoSelecionado = this.produtos[0].sexo;
    this.apelido = this.produtos[0].apelido;

    this.brinco = this.produtos[0].brinco; //TODO: Preencher com o [Brinco] do animal

    this.nomeProduto = this.produtos[0].nomeProduto;

    this.pelagemSelecionada = this.produtos[0].pelagem;
    // this.pn = this.produtos[0].pn;

    this.dataNasc = this.produtos[0].dataNascimento;
    this.categoriaIdadeSelecionada = this.produtos[0].categoriaIdade;

    this.idadeDias = this.produtos[0].idadeDias;
    this.idadeMeses = this.produtos[0].idadeMeses;
    this.idadeExtensa = this.produtos[0].idadeExtensa;
    this.idadeDias + this.produtos[0].idadeDias;

    // this.dataJulg = this.produtos[0].dataJulg;
    // this.dataJulgamentoExtensa = this.produtos[0].dataJulgamentoExtensa;
    this.sisbov = this.produtos[0].sisbov;
    // this.situacoes = this.produtos[0].situacoes;

    this.statusSelecionado = this.produtos[0].status;

    this.situacaoReprodutivaDoAnimal = this.produtos[0].situacaoReprod;

    this.grupoManejo = this.produtos[0].grupoManejo;
    // this.cdcOrigem = this.produtos[0].cdcOrigem;
    // this.cdnOrigem = this.produtos[0].cdnOrigem;
    // this.epmurasSelecionado = this.produtos[0].epmuras;

    this.racaSelecionadaPai = this.produtos[0].produtoPai.raca;
    this.categoriaSelecionadaPai = this.produtos[0].produtoPai.categoria;
    this.seriePai = this.produtos[0].produtoPai.serie;
    this.rgnPai = this.produtos[0].produtoPai.rgn;
    this.rgdPai = this.produtos[0].produtoPai.rgd;

    this.racaSelecionadaMae = this.produtos[0].produtoMae.raca;
    this.categoriaSelecionadaMae = this.produtos[0].produtoMae.categoria;
    this.serieMae = this.produtos[0].produtoMae.serie;
    this.rgnMae = this.produtos[0].produtoMae.rgn;
    this.rgdMae = this.produtos[0].produtoMae.rgd;

    this.origemSelecionada = this.produtos[0].origemAnimal;
    this.ocorrenciaReprodSelecionada = this.produtos[0].ocorrenciaReprod;
    // this.minhaClassificacaoSelecionada = this.produtos[0].minhaClassificacao;

    this.receptora = this.produtos[0].registroReceptora;
    this.tipagemSelecionada = this.produtos[0].tipagem;
    // this.ponderalSelecionado = this.produtos[0].ponderal;
    this.tipoPartoSelecionado = this.produtos[0].tipoParto;
    // this.possuiDNASelecionado = this.produtos[0].possuiDNA;

    // this.nomePai = this.produtos[0].nomePai;
    // this.nomeMae = this.produtos[0].nomeMae;

    // this.nomeAvoPaterno = this.produtos[0].nomeAvoPaterno;
    // this.nomeAvohPaterna = this.produtos[0].nomeAvohPaterna;
    // this.nomeAvoMaterno = this.produtos[0].nomeAvoMaterno;
    // this.nomeAvoMaterna = this.produtos[0].nomeAvoMaterna;

    // this.nomePaiAvoPaterno = this.produtos[0].nomePaiAvoPaterno;
    // this.nomeMaeAvoPaterno = this.produtos[0].nomeMaeAvoPaterno;
    // this.nomePaiAvohPaterno = this.produtos[0].nomePaiAvohPaterno;
    // this.nomeMaeAvohPaterno = this.produtos[0].nomeMaeAvohPaterno;
    // this.nomePaiAvoMaterno = this.produtos[0].nomePaiAvoMaterno;
    // this.nomeMaeAvoMaterno = this.produtos[0].nomeMaeAvoMaterno;
    // this.nomePaiAvohMaterno = this.produtos[0].nomePaiAvohMaterno;
    // this.nomeMaeAvohMaterno = this.produtos[0].nomeMaeAvohMaterno;
  }
  
  showModal(item: string) { 
    switch (item) {
      case 'upload':
        this.mostrarUpload = true;
        break;
      case 'pai':
        this.refResumido = this.dialogService.open(ResumidoComponent, {
          header: 'Cadastro do Produto Resumido',
          width: '45%',
          height: '60%',
          contentStyle: { overflow: 'auto' },
          draggable: true,
          maximizable: true,
        });
        break;
      case 'mae':
        this.refResumido = this.dialogService.open(ResumidoComponent, {
          header: 'Cadastro do Produto Resumido',
          width: '45%',
          height: '60%',
          contentStyle: { overflow: 'auto' },
          draggable: true,
          maximizable: true,
        });
        break;
      case 'genealogia':
        this.refGenealogia = this.dialogService.open(GenealogiaComponent, {
          header: 'Genalogia',
          width: '55%',
          height: '60%',
          contentStyle: { overflow: 'auto' },
          draggable: true,
          resizable: true,
          maximizable: true,
        });
        break;
      default:
        break;
    }
  }

  upload() {
    // this.uploadedFiles.push(file);

    this.messageService.add({
      severity: 'success',
      summary: 'Foto enviada',
      detail: '',
    });
  }

  // saveAsExcelFile(buffer: any, fileName: string): void {
  //   import('file-saver').then((FileSaver) => {
  //     let EXCEL_TYPE =
  //       'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  //     let EXCEL_EXTENSION = '.xlsx';
  //     const data: Blob = new Blob([buffer], {
  //       type: EXCEL_TYPE,
  //     });
  //     FileSaver.saveAs(
  //       data,
  //       fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
  //     );
  //   });
  // }

  // exportExcel() {
  //   import('xlsx').then((xlsx) => {
  //     const worksheet = xlsx.utils.json_to_sheet(this.produtos);
  //     const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
  //     const excelBuffer: any = xlsx.write(workbook, {
  //       bookType: 'xlsx',
  //       type: 'array',
  //     });
  //     this.saveAsExcelFile(excelBuffer, 'primengTable');
  //   });
  // }
}
