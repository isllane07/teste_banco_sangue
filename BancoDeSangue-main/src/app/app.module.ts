// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DoadorService } from './cadastro-doador/doador.service';
import { ListaDoadoresComponent } from './lista-doadores/lista-doadores.component';
import { CadastroDoadorComponent } from './cadastro-doador/cadastro-doador.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ListaDoadoresComponent,
    CadastroDoadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DoadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
