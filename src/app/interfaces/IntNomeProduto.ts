import { EnumSimNao } from '../enum/EnumSimNao';

export interface IntNomeProduto {
  cod: number;
  codProduto: number;
  nome: string;
  prefixo: string;
  sufixo: string;
  padrao: EnumSimNao;
}
