import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importe o módulo FormsModule

import { AppComponent } from './app.component';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component'; // Importe o componente LivroDadosComponent
import { AppRoutingModule } from './app-routing.module'; // Importe o AppRoutingModule
import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';

@NgModule({
  declarations: [
    AppComponent,
    LivroListaComponent,
    LivroDadosComponent // Certifique-se de incluir o LivroDadosComponent aqui
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Adicione o FormsModule aqui
  ],
  providers: [
    ControleEditoraService,
    ControleLivrosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

