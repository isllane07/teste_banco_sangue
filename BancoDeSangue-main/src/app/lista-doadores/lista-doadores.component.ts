import { Component, OnInit } from '@angular/core';
import { DoadorService, Doador } from '../cadastro-doador/doador.service';

@Component({
  selector: 'app-lista-doadores',
  templateUrl: './lista-doadores.component.html',
  styleUrls: ['./lista-doadores.component.css']
})
export class ListaDoadoresComponent implements OnInit {
  doadores: Doador[] = [];

  constructor(private doadorService: DoadorService) {}

  ngOnInit(): void {
    this.doadorService.doadores$.subscribe(doadores => {
      this.doadores = doadores;
    });
  }

  removerDoador(codigoPin: string): void {
    this.doadorService.removerDoador(codigoPin);
  }
}
