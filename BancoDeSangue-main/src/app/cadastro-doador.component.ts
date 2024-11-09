// src/app/cadastro-doador/cadastro-doador.component.ts
import { Component, OnInit, Input } from '@angular/core';
import { DoadorService, Doador } from './doador.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-doador',
  templateUrl: './cadastro-doador.component.html',

})
export class CadastroDoadorComponent implements OnInit {
  @Input() doador: Doador = { codigoPin: '', nome: '', idade: 0, tipoSanguineo: '', dataUltimaDoacao: '' };

  constructor(
    private doadorService: DoadorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Checando se estamos editando um doador existente
    const codigoPin = this.route.snapshot.paramMap.get('codigoPin');
    if (codigoPin) {
      const doadorEditando = this.doadorService['doadores'].getValue().find(d => d.codigoPin === codigoPin);
      if (doadorEditando) {
        this.doador = { ...doadorEditando };
      }
    }
  }

  salvar(): void {
    if (this.doador.codigoPin) {
      this.doadorService.editarDoador(this.doador);
    } else {
      this.doadorService.adicionarDoador(this.doador);
    }
    this.router.navigate(['/doadores']); // Redireciona para a lista de doadores
  }
}
