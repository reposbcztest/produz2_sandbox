import {
  Component,
  OnInit,
  Pipe,
  PipeTransform,
  ViewChild,
} from '@angular/core';
import {
  ConfirmationService,
  MegaMenuItem,
  MenuItem,
  PrimeNGConfig,
} from 'primeng/api';

import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { IntUrl } from '@produz/interfaces/IntUrl';
import { TabView } from 'primeng/tabview';
import { IntProprietario } from '@produz/interfaces/IntProprietario';
import { IntFazenda } from '@produz/interfaces/IntFazenda';
import { IntRaca } from '@produz/interfaces/IntRaca';
import { IntCategoria } from '@produz/interfaces/IntCategoria';

import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { PesquisaSerieComponent } from '@produz/util/pesquisa-serie/pesquisa-serie.component';
import { DocumentosAbertosComponent } from '@produz/util/documentos-abertos/documentos-abertos.component';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-completo',
  templateUrl: './completo.component.html',
  styleUrls: ['./completo.component.css'],
  providers: [ConfirmationService, DialogService],
})
export class CompletoComponent implements OnInit {
  title = 'Produz';

  items: MenuItem[] = [];
  activeItem?: MenuItem;

  menuConfig: MenuItem[] = [];
  // settings: MenuItem[] = [];

  parametros: MegaMenuItem[];

  abas: IntUrl[] = [];
  qtAbas: number = 0;
  novaAba: string = '';
  abaSelecionada: number = 0;

  mostraConfiguracoes: boolean = true;
  mostraLicenciado: boolean = false;
  mostraNotificacao: boolean = false;
  mostrarPesquisaSerie: boolean = false;

  proprietarios: IntProprietario[];
  proprietarioSelecionado: IntProprietario;

  fazendas: IntFazenda[];
  fazendaSelecionada: IntFazenda;

  racas: IntRaca[];
  racaSelecionada: IntRaca;

  categorias: IntCategoria[];
  categoriaSelecionada: IntCategoria;

  opcoesLicenciado: string[] = [];

  refPesquisaSerie: DynamicDialogRef;

  @ViewChild(TabView, {
    static: true,
  })
  teste: TabView;

  constructor(
    private config: PrimeNGConfig,
    public router: Router,
    private confirmationService: ConfirmationService,
    public dialogService: DialogService
  ) {}

  ngOnInit() {
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

    this.config.setTranslation({
      dayNames: [
        'Domingo',
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sábado',
      ],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Quin', 'Sex', 'Sab'],
      dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
      monthNames: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
      ],
      monthNamesShort: [
        'Jan',
        'Fev',
        'Mar',
        'Abr',
        'Mai',
        'Jun',
        'Jul',
        'Ago',
        'Set',
        'Out',
        'Nov',
        'Dez',
      ],
      dateFormat: 'dd/mm/yy',
      emptyMessage: 'Nenhum resultado encontrado',
      emptyFilterMessage: 'Nenhum resultado encontrado',
    });

    // this.settings = [
    //   {
    //     icon: 'pi pi-ellipsis-v',
    //     items: [
    //       {
    //         label: 'Licenciado Padrão',
    //         icon: 'pi pi-users',
    //       },
    //       {
    //         label: 'Notificações',
    //         icon: 'pi pi-info-circle',
    //       },
    //       {
    //         label: 'Parâmetros',
    //         icon: 'pi pi-cog',
    //         items: [
    //           {
    //             label: 'Animal',
    //             items: [
    //               { label: 'Banco de Nomes' },
    //               { label: 'Cadastro de Protocolos' },
    //               { label: 'Causas de Morte' },
    //               { label: 'Minhas Classificações' },
    //               { label: 'Ocorrências' },
    //               { label: 'Ocorrências Reprodutivas' },
    //               { label: 'Origem no Rebanho' },
    //               { label: 'Séries Alfabéticas' },
    //               { label: 'Situação Atual' },
    //             ],
    //           },
    //           {
    //             label: 'Controle Leiteiro',
    //             items: [
    //               { label: 'Ajustes' },
    //               { label: 'Causas de Eliminação' },
    //               { label: 'Causas de Secagem' },
    //               { label: 'Fatores Multiplicativos' },
    //               { label: 'Observações' },
    //               { label: 'Pendências' },
    //             ],
    //           },
    //           {
    //             label: 'Gerais',
    //             items: [
    //               { label: 'Configurações de Identificação Eletrônica' },
    //               { label: 'Configurações do Sistema' },
    //               { label: 'Tipos de Contatos' },
    //               { label: 'Unidades Federativas' },
    //               { label: 'Valor Atual da Arroba' },
    //             ],
    //           },
    //           {
    //             label: 'Produtividade',
    //             items: [
    //               { label: 'Balanças Eletrônicas' },
    //               { label: 'Condições de Criação' },
    //               { label: 'Grupos de Manejo' },
    //               { label: 'Idades Padrão' },
    //               { label: 'Motivos de Ausência' },
    //               { label: 'Sistema de Produção' },
    //             ],
    //           },
    //           {
    //             label: 'Raça',
    //             items: [
    //               { label: 'Cadastro de Raças' },
    //               { label: 'Categorias de Registros' },
    //               { label: 'Cruzamentos de Raças' },
    //               { label: 'Grau de Sangue' },
    //               { label: 'Ordenação para Cruzamento' },
    //               { label: 'Variedades de Raças' },
    //             ],
    //           },
    //           {
    //             label: 'Sistema',
    //             items: [
    //               { label: 'Configurações de Comunicação' },
    //               { label: 'Índice de Peso Calculado' },
    //               { label: 'Médias de Peso Calculado' },
    //               {
    //                 label: 'PHRAS - EPMURAS',
    //                 items: [
    //                   { label: 'Classificações EPMURAS' },
    //                   { label: 'Classificações PHRAS' },
    //                   { label: 'Pontuação EPMURAS' },
    //                 ],
    //               },
    //               { label: 'Siglas de Categoria de Registro' },
    //               { label: 'Siglas de Raças' },
    //               { label: 'Tipo de Diagnóstico' },
    //               { label: 'Tipo de Produto' },
    //               { label: 'Tipo de Serviço' },
    //               { label: 'Tipo de Situação Reprodutiva' },
    //             ],
    //           },
    //         ],
    //       },
    //       { label: 'Documentos Abertos', icon: 'pi pi-file-pdf' },
    //       { label: 'Series Alfabéticas', icon: 'pi pi-book' },
    //       { label: 'Passo a Passo', icon: 'pi pi-pencil' },
    //       { label: 'Ajuda', icon: 'pi pi-question-circle' },
    //     ],
    //   },
    // ];

    this.menuConfig = [
      {
        icon: 'pi pi-users',
        title: 'Licenciado Padrão',
        command: (event) => {
          this.showModal('licenciado');
        },
      },
      {
        icon: 'pi pi-info-circle',
        title: 'Notificações',
        command: (event) => {
          this.showModal('notificacao');
        },
      },
      {
        icon: 'pi pi-cog',
        title: 'Parâmetros',
        items: [
          {
            label: 'Animal',
            items: [
              { label: 'Banco de Nomes' },
              { label: 'Cadastro de Protocolos' },
              { label: 'Causas de Morte' },
              { label: 'Minhas Classificações' },
              { label: 'Ocorrências' },
              { label: 'Ocorrências Reprodutivas' },
              { label: 'Origem no Rebanho' },
              { label: 'Séries Alfabéticas' },
              { label: 'Situação Atual' },
            ],
          },
          {
            label: 'Controle Leiteiro',
            items: [
              { label: 'Ajustes' },
              { label: 'Causas de Eliminação' },
              { label: 'Causas de Secagem' },
              { label: 'Fatores Multiplicativos' },
              { label: 'Observações' },
              { label: 'Pendências' },
            ],
          },
          {
            label: 'Gerais',
            items: [
              { label: 'Configurações de Identificação Eletrônica' },
              { label: 'Configurações do Sistema' },
              { label: 'Tipos de Contatos' },
              { label: 'Unidades Federativas' },
              { label: 'Valor Atual da Arroba' },
            ],
          },
          {
            label: 'Produtividade',
            items: [
              { label: 'Balanças Eletrônicas' },
              { label: 'Condições de Criação' },
              { label: 'Grupos de Manejo' },
              { label: 'Idades Padrão' },
              { label: 'Motivos de Ausência' },
              { label: 'Sistema de Produção' },
            ],
          },
          {
            label: 'Raça',
            items: [
              { label: 'Cadastro de Raças' },
              { label: 'Categorias de Registros' },
              { label: 'Cruzamentos de Raças' },
              { label: 'Grau de Sangue' },
              { label: 'Ordenação para Cruzamento' },
              { label: 'Variedades de Raças' },
            ],
          },
          {
            label: 'Sistema',
            items: [
              { label: 'Configurações de Comunicação' },
              { label: 'Índice de Peso Calculado' },
              { label: 'Médias de Peso Calculado' },
              {
                label: 'PHRAS - EPMURAS',
                items: [
                  { label: 'Classificações EPMURAS' },
                  { label: 'Classificações PHRAS' },
                  { label: 'Pontuação EPMURAS' },
                ],
              },
              { label: 'Siglas de Categoria de Registro' },
              { label: 'Siglas de Raças' },
              { label: 'Tipo de Diagnóstico' },
              { label: 'Tipo de Produto' },
              { label: 'Tipo de Serviço' },
              { label: 'Tipo de Situação Reprodutiva' },
            ],
          },
        ],
      },
      {
        icon: 'pi pi-file-pdf',
        title: 'Documentos Abertos',
        command: (event) => {
          this.showModal('documentosAbertos');
        },
      },
      {
        icon: 'pi pi-book',
        title: 'Séries Alfabéticas',
        command: (event) => {
          this.showModal('pesquisaSerie');
        },
      },
      { icon: 'pi pi-pencil', title: 'Passo a Passo' },
      {
        icon: 'pi pi-question-circle',
        title: 'Ajuda',
        command: (event) => {
          const link = document.createElement('a');
          link.href = '/assets/documents/ManualProduz.pdf';
          link.target = '_blank';
          link.click();
        },
      },
    ];

    this.items = [
      { label: 'Favoritos', disabled: true },
      {
        label: 'Geral',
        items: [
          { label: 'Contatos' },
          { label: 'Fazenda' },
          { label: 'Prefixo/Sufixo' },
        ],
        disabled: true,
      },
      {
        label: 'Movimentação',
        items: [
          {
            label: 'Animais',
            command: (event) => {
              this.configurarAbas('Animais', 'sistema/movimentacao/animais');
            },
          },
          {
            label: 'Animais v2',
            command: (event) => {
              this.configurarAbas(
                'Animais New',
                'sistema/movimentacao/animaisnew'
              );
            },
          },
          { label: 'Cadastro/Lote', disabled: true },
          { label: 'Genealogia', disabled: true },
          { label: 'Mortes', disabled: true },
          { label: 'Venda', disabled: true },
          { label: 'ADT/TE', disabled: true },
          { label: 'CAI', disabled: true },
          { label: 'Serviços/Lote', disabled: true },
          { label: 'Empréstimo', disabled: true },
          { label: 'TEF', disabled: true },
          // {
          //   label: 'Relatórios',
          //   items: [
          //     { label: ' Animais ' },
          //     { label: ' Análise Quantitativa ' },
          //     { label: ' Extrato de Mortes ' },
          //     { label: ' Extrato de Compra e Venda ' },
          //     { label: ' Transferência de Fazenda e Grupo de Manejo  ' },
          //     { label: ' Extrato de Animais no Rebanho ' },
          //     { label: ' Gráficos diversos sobre o Rebanho ' },
          //   ],
          // },
        ],
      },
      {
        label: 'Reprodução',
        disabled: true,
        items: [
          { label: 'ADT - S' },
          { label: 'Estoque/Sêmen' },
          { label: 'Coberturas' },
          { label: 'CDC/Lote' },
          { label: 'RM' },
          { label: 'CDC/TE' },
          { label: 'CDC/FIV' },
          { label: 'Toque' },
          { label: 'Atestado Veterinário' },
          { label: 'Nascimento' },
          // {
          //   label: 'Relatórios',
          //   items: [
          //     { label: 'Fêmeas aptas para Acasalamento/Produção das matrizes' },
          //     { label: 'Matrizes sem serviço no período' },
          //     { label: 'Produtividade das Matrizes' },
          //     { label: 'Fertilidade/Diagnostico de Matrizes' },
          //     { label: 'Produção de Bezerros' },
          //     { label: 'Índices Reprodutivos por Touro' },
          //     { label: 'Fêmeas Com Cria ao Pé' },
          //     { label: 'Estatística pro Inseminador' },
          //     { label: 'Matrizes/Receptoras que não Pariram' },
          //     { label: 'Matrizes que Pariram e não entraram em Novo Serviço' },
          //     { label: 'Ficha de Reprodutores ou Matrizes' },
          //     { label: 'Serviços de Matrizes por Período' },
          //     { label: 'Ficha Reprodutiva por Lote' },
          //     { label: 'Relatório Produtivo por Lote' },
          //     { label: 'Receptoras/Produção de Filhos' },
          //     { label: 'Histórico de Transferência de Embrião' },
          //     { label: 'Histórico/Demonstrativo sobre Coletas de Embriões' },
          //     { label: 'Doadoras/Produção de Filhos' },
          //     { label: 'Controle de Cios' },
          //     { label: 'Previsão para acasalamento' },
          //     { label: 'Histórico de Serviços da Receptora por Lote' },
          //     { label: 'Relatório de Sincronização de Receptoras/Matrizes' },
          //     { label: 'Previsão de acasalamento identificado' },
          //   ],
          // },
        ],
      },
      {
        label: 'Produtividade',
        disabled: true,
        items: [
          { label: 'Pesagens e Mensurações' },
          { label: 'Planilhas' },
          { label: 'Importação Peso Calculado' },
          // {
          //   label: 'Relatórios',
          //   items: [
          //     { label: 'Extrato de Pesagens' },
          //     { label: 'Extrato de Pesagens por CDP' },
          //     { label: 'Gerencial de Pesos à Desmama' },
          //     { label: 'Análise Peso Calculado (RPC)' },
          //     { label: 'Classificação pelo PHRAS/EPMURAS' },
          //   ],
          // },
        ],
      },
      {
        label: 'Leite',
        disabled: true,
        items: [
          { label: 'Controle' },
          { label: 'Controle/Lote' },
          // {
          //   label: 'Relatórios',
          //   items: [
          //     { label: 'Informações do Controle Leiteiro' },
          //     { label: 'Desempenho Leiteiro' },
          //     { label: 'Lactação dos últimos 12 Meses' },
          //     { label: 'Melhores Produções' },
          //     { label: 'Melhores Produções por Criador' },
          //     { label: 'Gráficos de Produção' },
          //     { label: 'Gráficos de Parto' },
          //     { label: 'Planilhas para Campo' },
          //   ],
          // },
        ],
      },
      {
        label: 'Eventos',
        disabled: true,
        items: [
          { label: 'Eventos' },
          { label: 'Exposição' },
          { label: 'Premiação' },
          { label: 'Vacinação' },
          { label: 'Medicamento' },
          { label: 'DNA' },
        ],
      },
      {
        label: 'PMGZ',
        disabled: true,
        items: [
          { label: 'Avaliação Genética' },
          { label: 'Acasalamentos' },
          { label: 'Tendências e Endogamia' },
          { label: 'Download' },
          // {
          //   label: 'Relatórios',
          //   items: [{ label: 'Relatórios CEP' }, { label: 'Relatórios PNAT' }],
          // },
        ],
      },
      {
        label: 'PMGZ Comercial',
        disabled: true,
        items: [
          { label: 'Importação' },
          { label: 'Desem. Anual' },
          { label: 'Peso Médio' },
          { label: 'Indíce reprodutivo e Maternais' },
          { label: 'Indicadores' },
          { label: 'Eficiencia Reprodutiva' },
        ],
      },
      {
        label: 'Comunicação',
        disabled: true,
        items: [
          { label: 'Enviar' },
          { label: 'Busca Resultado' },
          { label: 'Criador' },
          { label: 'Fazenda' },
          { label: 'Séries Alfabética' },
          { label: 'Atestado Veterinário' },
        ],
      },
      {
        label: 'Utilitários',
        disabled: true,
        items: [
          { label: 'Usuários' },
          { label: 'Importação/Exportação' },
          { label: 'Liberação' },
          { label: 'Segurança' },
        ],
      },
      {
        label: 'Módulo Curral',
        disabled: true,
        items: [
          { label: 'Exportar' },
          { label: 'Importar' },
          { label: 'Serviço' },
          { label: 'Ativar' },
          { label: 'Aditivo' },
          // { label: 'Relatórios', items: [
          //   {label: 'Extrato de Serviços Finalizados'}
          // ] },
        ],
      },
      {
        label: 'Relatórios',
        command: (event) => {
          this.configurarAbas('Relatórios', 'sistema/relatorios');
        },
      },
    ];
  }

  configurarAbas(aba: string, route: string) {
    this.qtAbas = this.qtAbas + 1;
    this.abaSelecionada = this.qtAbas;

    for (let t of this.teste.tabs) {
      if (t.selected) {
        t.selected = false;
      }
    }

    this.abas.push({
      label: aba,
      url: 'http://localhost:4200/#/' + route,
      selected: true,
    });
  }

  fecharAba(e: any) {
    this.qtAbas = this.qtAbas - 1;
    if (this.qtAbas.valueOf() == 0) {
      this.abas = [];
      this.router.navigate(['/completo/inicio']);
    }
    e.close();
  }

  sair() {
    this.router.navigate(['/']);
  }

  configuracoes() {
    const mostrar = this.mostraConfiguracoes;
    const btn = document.getElementById('config');
    btn.blur();

    if (mostrar == true) {
      btn.style.color = 'greenyellow';
    } else {
      btn.style.color = 'white';
      this.mostraLicenciado = false;
      this.mostraNotificacao = false;
    }

    this.mostraConfiguracoes = !this.mostraConfiguracoes;
  }

  /**
   * Atualiza o Licenciado Padrão
   */
  attLicenciadoModal() {
    this.mostraLicenciado = false;
    this.configuracoes();
  }

  showModal(item: string) {
    switch (item) {
      case 'licenciado':
        this.mostraLicenciado = !this.mostraLicenciado;
        this.proprietarioSelecionado = this.proprietarios[0];
        this.fazendaSelecionada = this.fazendas[0];
        this.racaSelecionada = this.racas[0];
        this.categoriaSelecionada = this.categorias[0];
        break;
      case 'notificacao':
        this.mostraNotificacao = !this.mostraNotificacao;
        break;
      case 'documentosAbertos':
        this.refPesquisaSerie = this.dialogService.open(
          DocumentosAbertosComponent,
          {
            header: 'Documentos Abertos',
            width: '1300px',
            height: '475px',
            draggable: false,
            modal: true,
            resizable: false,
          }
        );
        break;
      case 'pesquisaSerie':
        this.refPesquisaSerie = this.dialogService.open(
          PesquisaSerieComponent,
          {
            header: 'Pesquisa de Séries Alfabéticas na ABCZ',
            width: '905px',
            height: '270px',
            draggable: false,
            modal: true,
            resizable: false,
          }
        );
        break;
      default:
        break;
    }
  }
}
