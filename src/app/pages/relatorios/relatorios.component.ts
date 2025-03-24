import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css'],
})
export class RelatoriosComponent implements OnInit {
  constructor(private primeConfig: PrimeNGConfig) {}

  ngOnInit(){
    this.primeConfig.ripple = true;
  }
}
