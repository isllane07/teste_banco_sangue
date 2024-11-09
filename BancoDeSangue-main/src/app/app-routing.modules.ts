// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDoadoresComponent } from './lista-doadores/lista-doadores.component';
import { CadastroDoadorComponent } from './cadastro-doador/cadastro-doador.component';

const routes: Routes = [
  { path: 'doadores', component: ListaDoadoresComponent },
  { path: 'doadores/cadastrar', component: CadastroDoadorComponent },
  { path: 'doadores/editar/:codigoPin', component: CadastroDoadorComponent },
  { path: '', redirectTo: '/doadores', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
