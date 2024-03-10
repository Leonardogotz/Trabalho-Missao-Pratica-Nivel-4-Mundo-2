import { Component, OnInit } from '@angular/core';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {
  editoras: Editora[] = [];
  livros: Livro[] = [];

  constructor(private servEditora: ControleEditoraService, private servLivros: ControleLivrosService) { }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
  }

  excluir(codigo: number | undefined): void {
    if (codigo !== undefined) {
    this.servLivros.excluir(codigo);
    this.livros = this.servLivros.obterLivros();
    }
  }

  obterNome(codEditora: number | undefined): string {
    if (codEditora !== undefined) {
      return this.servEditora.getNomeEditora(codEditora);
    }
    return 'Não foi possivel obter o livro';
  }
}
