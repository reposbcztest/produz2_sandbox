import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IntProduto } from '@produz/interfaces/IntProduto';

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

@Injectable()
export class ProdutoService {
  produtos: IntProduto[] = [];

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
  sexoSelecionado: IntSexo;
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

  constructor(private http: HttpClient) {
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

    this.registro = 'G 1000'; //TODO: Preencher com o [Registro] do Animal
    this.deca = '1'; //TODO: Preencher com o [deca] do animal
    this.iABCZ = '4.04'; //TODO: Preencher com o [iABCZ] do animal
    this.F = '   '; //TODO: Preencher com o [F] do animal

    this.comercialPMGZC = EnumSimNao.N.toUpperCase(); //TODO: Preencher com o [Comercial] do animal
    this.classificacaoPMGZCSelecionado = this.classificacoesPMGZC[0];

    this.serie = ' '; //TODO: Preencher com a [Serie] do animal
    this.racaSelecionada = this.racas[4]; //TODO: Preencher com a [Raça] do animal
    this.categoriaSelecionada = this.categorias[0]; //TODO: Preencher com a [Categoria] do animal

    this.proprietarioSelecionado = this.proprietarios[0]; //TODO: Preencher com o [Proprietário] do animal
    this.fazendaSelecionada = this.fazendas[0]; //TODO: Preencher com a [Fazenda] do animal
    this.criadorSelecionado = this.criadores[0]; //TODO: Preencher com a [Fazenda] do animal

    this.rgn = ' '; //TODO: Preencher com o [RGN] do animal
    this.rgd = ' '; //TODO: Preencher com o [RGD] do animal
    this.sexoSelecionado = this.sexos[1]; //TODO: Preencher com o [Sexo] do animal
    this.apelido = ' '; //TODO: Preencher com o [Apelido] do animal
    // this.brinco = ' '; //TODO: Preencher com o [Brinco] do animal

    //TODO: Preencher com o [Nome] do animal
    this.nomeProduto = {
      cod: 0,
      codProduto: 1,
      prefixo: ' ',
      nome: 'TESTE',
      sufixo: ' ',
      padrao: EnumSimNao.S,
    };

    this.pelagemSelecionada = this.pelagens[0]; //TODO: Preencher com a [Pelagem] do animal
    this.pn = ' '; //TODO: Preencher com o [P.N.] do animal

    this.dataNasc = new Date(); //TODO: Preencher com a [Data do Nascimento] do animal
    this.categoriaIdadeSelecionada = this.categoriasIdade[0]; //TODO: Preencher com a [Categoria de Idade] do animal

    this.idadeDias = 11792;
    this.idadeMeses = 387;
    this.idadeExtensa =
      this.idadeDias + ' dia(s) ou ' + this.idadeMeses + 'mês(es)'; //TODO: Calcular a data extensa de acordo com a [Data de Nascimento]

    this.dataJulg = new Date(); //TODO: Preencher com a [Data do Julgamento] do animal
    this.dataJulgamentoExtensa = '11797 dia(s) ou 126 mês(es)'; //TODO: Calcular a data do julgamento extensa de acordo com a [Data de Julgamento]
    this.sisbov = ' '; //TODO: Preencher com o [Sisbov] do animal
    this.situacoes = ' REB / CDN / CAI'; //TODO: Preencher com as [Situações] do animal

    this.statusSelecionado = this.status[2]; //TODO: Preencher com o [Status] do animal

    this.situacaoReprodutivaDoAnimal = this.situacoesReprodutivas[1]; //TODO: Preencher com a [Situação Reprodutiva] do animal

    this.grupoManejo = ' '; //TODO: Preencher com o [Grupo de Manejo] do animal
    this.cdcOrigem = ' '; //TODO: Preencher com a [CDC de Origem] do animal
    this.cdnOrigem = ' '; //TODO: Preencher com a [CDN DE Origem] do animal
    this.epmurasSelecionado = ' '; //TODO: Preencher com o [EPMURAS] do animal

    this.racaSelecionadaPai = this.racas[4]; //TODO: Preencher com a [Raça] do Pai do animal
    this.categoriaSelecionadaPai = this.categorias[0]; //TODO: Preencher com a [Raça] do Pai do animal
    this.seriePai = ' '; //TODO: Preencher com a [Serie] do pai do animal
    this.rgnPai = ' '; //TODO: Preencher com o [RGN] do pai do animal
    this.rgdPai = ' '; //TODO: Preencher com o [RGD] do pai do animal

    this.racaSelecionadaMae = this.racas[4]; //TODO: Preencher com a [Raça] da Mae do animal
    this.categoriaSelecionadaMae = this.categorias[0]; //TODO: Preencher com a [Raça] da Mae do animal
    this.serieMae = ' '; //TODO: Preencher com a [Serie] da mãe do animal
    this.rgnMae = ' '; //TODO: Preencher com o [RGN] da mãe do animal
    this.rgdMae = ' '; //TODO: Preencher com o [RGD] da mãe do animal

    this.origemSelecionada = this.origens[0]; //TODO: Preencher com a [Origem] do animal
    this.ocorrenciaReprodSelecionada = this.ocorrenciasReprod[0]; //TODO: Preencher com a [Ocorrencia Reprodutiva] do animal
    this.minhaClassificacaoSelecionada = this.minhasClassificacoes[0]; //TODO: Preencher com a [Minha Classificação] do animal

    this.receptora = ' '; //TODO: Preencher com a [Receptora] do animal
    this.tipagemSelecionada = this.tipagens[1]; //TODO: Preencher com a [Tipagem] do animal
    this.ponderalSelecionado = this.ponderais[0]; //TODO: Preencher com o [Ponderal] do animal
    this.tipoPartoSelecionado = this.tiposParto[0]; //TODO: Preencher com o [Tipo de Parto] do animal
    this.possuiDNASelecionado = this.possuiDNAs[1]; //TODO: Preencher com o [PossuiDNA] do animal

    this.nomePai = 'TestePaiTestePaiTestePai'.toUpperCase(); //TODO: Preencher com o [Nome] do Pai do animal
    this.nomeMae = 'TesteMae'.toUpperCase(); //TODO: Preencher com o [Nome] da Mae do animal

    this.nomeAvoPaterno = 'Teste3'.toUpperCase(); //TODO: Preencher
    this.nomeAvohPaterna = 'Teste4'.toUpperCase(); //TODO: Preencher
    this.nomeAvoMaterno = 'Teste5'.toUpperCase(); //TODO: Preencher
    this.nomeAvoMaterna = 'Teste6'.toUpperCase(); //TODO: Preencher

    this.nomePaiAvoPaterno = 'Teste7'.toUpperCase(); //TODO: Preencher
    this.nomeMaeAvoPaterno = 'Teste8'.toUpperCase(); //TODO: Preencher
    this.nomePaiAvohPaterno = 'Teste9'.toUpperCase(); //TODO: Preencher
    this.nomeMaeAvohPaterno = 'Teste10'.toUpperCase(); //TODO: Preencher
    this.nomePaiAvoMaterno = 'Teste11'.toUpperCase(); //TODO: Preencher
    this.nomeMaeAvoMaterno = 'Teste12'.toUpperCase(); //TODO: Preencher
    this.nomePaiAvohMaterno = 'Teste13'.toUpperCase(); //TODO: Preencher
    this.nomeMaeAvohMaterno = 'Teste14'.toUpperCase(); //TODO: Preencher
  }

  buscaProduto() {
    // Mock de produtos
    this.produtos = [
      {
        codigo: 0,
        fazenda: this.fazendas[0],
        raca: this.racas[16],
        categoria: this.categorias[0],
        sexo: EnumSexo.M,
        serie: 'TESA',
        rgn: 'G 1000',
        rgd: '',
        proprietario: this.proprietarios[0],
        brinco: '123456',
        sisbov: '',
        apelido: 'APELIDO',
        tipagem: this.tipagens[1],
        dna: this.possuiDNAs[1],
        padrao: EnumSimNao.S,
        dataNascimento: new Date(),
        situacaoReprod: this.situacoesReprodutivas[0],
        pesoNascimento: 40,
        pesoNascimentoABCZ: 40,
        status: this.status[0],
        ocorrenciaReprod: this.ocorrenciasReprod[0],
        produtoMae: {
          codigo: 0,
          fazenda: this.fazendas[0],
          raca: this.racas[16],
          categoria: this.categorias[0],
          sexo: EnumSexo.M,
          serie: 'TESA',
          rgn: 'G 1000',
          rgd: '',
          proprietario: this.proprietarios[0],
          brinco: '123456',
          sisbov: '',
          apelido: 'APELIDO',
          tipagem: this.tipagens[1],
          dna: this.possuiDNAs[1],
          padrao: EnumSimNao.S,
          dataNascimento: new Date(),
          situacaoReprod: this.situacoesReprodutivas[0],
          pesoNascimento: 40,
          pesoNascimentoABCZ: 40,
          status: this.status[0],
          ocorrenciaReprod: this.ocorrenciasReprod[0],
          produtoMae: null,
          produtoPai: null,
          tipoProduto: this.tiposProduto[0],
          classificacao: this.classificacoesPMGZC[0],
          cdnFechada: true,
          indPonderal: false,
          indImprimir: false,
          dataRGD: new Date(),
          pelagem: this.pelagens[0],
          origemAnimal: this.origens[0],
          nomeProduto: {
            cod: 0,
            codProduto: 1,
            prefixo: ' ',
            nome: 'TESTE MÃE',
            sufixo: ' ',
            padrao: EnumSimNao.S,
          },
          // grauSangue: '',
          categoriaIdade: this.categoriasIdade[0],
          // usuarioUltimaAlteracao: '',
          observacao: 'teste de observação',
          idadeDias: 182,
          idadeMeses: 6,
          idadeExtensa: '182 dia(s) ou 6 mês(es)',
          registro: 'G 1000',
          grupoManejo: '1',
          epmuras: this.epmuras[0],
          registroReceptora: '',
          criador: this.criadores[0],
          diaNascimento: 14,
          numeroCdn: 1234,
          tipoParto: this.tiposParto[0],
          deca: '1',
          iABCZ: '4.04',
          F: '   ',
        },
        produtoPai: {
              codigo: 0,
              fazenda: this.fazendas[0],
              raca: this.racas[5],
              categoria: this.categorias[0],
              sexo: EnumSexo.M,
              serie: 'TESA',
              rgn: 'G 1000',
              rgd: '',
              proprietario: this.proprietarios[0],
              brinco: '123456',
              sisbov: '',
              apelido: 'APELIDO',
              tipagem: this.tipagens[1],
              dna: this.possuiDNAs[1],
              padrao: EnumSimNao.S,
              dataNascimento: new Date(),
              situacaoReprod: this.situacoesReprodutivas[0],
              pesoNascimento: 40,
              pesoNascimentoABCZ: 40,
              status: this.status[0],
              ocorrenciaReprod: this.ocorrenciasReprod[0],
              produtoMae: null,
              produtoPai: null,
              tipoProduto: this.tiposProduto[0],
              classificacao: this.classificacoesPMGZC[0],
              cdnFechada: true,
              indPonderal: false,
              indImprimir: false,
              dataRGD: new Date(),
              pelagem: this.pelagens[0],
              origemAnimal: this.origens[0],
              nomeProduto: {
                cod: 0,
                codProduto: 1,
                prefixo: ' ',
                nome: 'TESTE PAI',
                sufixo: ' ',
                padrao: EnumSimNao.S,
              },
              // grauSangue: '',
              categoriaIdade: this.categoriasIdade[0],
              // usuarioUltimaAlteracao: '',
              observacao: 'teste de observação',
              idadeDias: 182,
              idadeMeses: 6,
              idadeExtensa: '182 dia(s) ou 6 mês(es)',
              registro: 'G 1000',
              grupoManejo: '1',
              epmuras: this.epmuras[0],
              registroReceptora: '',
              criador: this.criadores[0],
              diaNascimento: 14,
              numeroCdn: 1234,
              tipoParto: this.tiposParto[0],
              deca: '1',
              iABCZ: '4.04',
              F: '   ',
            }
        ,
        tipoProduto: this.tiposProduto[0],
        classificacao: this.classificacoesPMGZC[0],
        cdnFechada: true,
        indPonderal: false,
        indImprimir: false,
        dataRGD: new Date(),
        pelagem: this.pelagens[0],
        origemAnimal: this.origens[0],
        nomeProduto: {
          cod: 0,
          codProduto: 1,
          prefixo: ' ',
          nome: 'TESTE PRIMEIRO',
          sufixo: ' ',
          padrao: EnumSimNao.S,
        },
        // grauSangue: '',
        categoriaIdade: this.categoriasIdade[0],
        // usuarioUltimaAlteracao: '',
        observacao: 'teste de observação',
        idadeDias: 182,
        idadeMeses: 6,
        idadeExtensa: '182 dia(s) ou 6 mês(es)',
        registro: 'G 1000',
        grupoManejo: '1',
        epmuras: this.epmuras[0],
        registroReceptora: '',
        criador: this.criadores[0],
        diaNascimento: 14,
        numeroCdn: 1234,
        tipoParto: this.tiposParto[0],
        deca: '1',
        iABCZ: '4.04',
        F: '   ',
      },
      
    ];

    return this.produtos;
  }
}
