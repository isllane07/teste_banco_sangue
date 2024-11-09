// src/app/doador.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Doador {
  codigoPin: string;
  nome: string;
  idade: number;
  tipoSanguineo: string;
  dataUltimaDoacao: string;
}

@Injectable({
  providedIn: 'root',
})
export class DoadorService {
  private doadores = new BehaviorSubject<Doador[]>([]); // Armazena a lista de doadores
  doadores$ = this.doadores.asObservable(); // Observable para permitir assinaturas

  constructor() {}

  // Método para adicionar um novo doador
  adicionarDoador(doador: Doador) {
    const doadoresAtualizados = [...this.doadores.value, doador];
    this.doadores.next(doadoresAtualizados); // Atualiza a lista de doadores
  }

  // Método para remover um doador da lista
  removerDoador(codigoPin: string) {
    const doadoresAtualizados = this.doadores.value.filter(d => d.codigoPin !== codigoPin);
    this.doadores.next(doadoresAtualizados); // Atualiza a lista
  }

  // Método para editar um doador
  editarDoador(doador: Doador) {
    const doadoresAtualizados = this.doadores.value.map(d => 
      d.codigoPin === doador.codigoPin ? doador : d
    );
    this.doadores.next(doadoresAtualizados); // Atualiza a lista de doadores
  }
}
