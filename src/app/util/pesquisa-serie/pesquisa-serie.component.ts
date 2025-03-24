import { Component, OnInit } from '@angular/core';

import { IntPesquisaSerie } from '@produz/interfaces/IntPesquisaSerie';

@Component({
  selector: 'app-pesquisa-serie',
  templateUrl: './pesquisa-serie.component.html',
  styleUrls: ['./pesquisa-serie.component.css'],
})
export class PesquisaSerieComponent implements OnInit {
  // Campo para digitar a Série
  serieBusca: String = '';

  // Resultado da busca
  serieResultado: IntPesquisaSerie[];

  constructor() {}

  ngOnInit(): void {}

  buscaSerieResultado() {
    // Buscar a Série aqui e atribuir à serieResultado
    this.serieResultado = [
      {
        codCriador: '1',
        nomCriador: 'Criado Teste',
        codFazenda: '1',
        nomFazenda: 'Fazenda teste',
        cidade: 'Uberaba',
        uf: 'MG',
      },
    ];
  }

  limpaSerieResultado() {
    this.serieBusca = '';
    this.serieResultado = null;
  }
}
