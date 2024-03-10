import { Injectable } from '@angular/core';
import { Livro } from './livro'; // Importe a classe Livro aqui

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Livro[] = [
    { codigo: 1, codEditora: 1, titulo: 'Use a Cabeça: Java', resumo: 'Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java.', autores: ['Bert Bates', 'Kathy Sierra'] },
    { codigo: 2, codEditora: 2, titulo: 'Java, como Programar', resumo: 'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com livros Deitel.', autores: ['Paul Deitel', 'Harvey Deitel'] },
    { codigo: 3, codEditora: 3, titulo: 'Java no Frontend: Da teoria à prática', resumo: 'Este guia essencial oferece as ferramentas e técnicas para dominar a criação de interfaces dinâmicas e responsivas, capacitando tanto iniciantes quanto profissionais a se destacarem no desenvolvimento frontend.', autores: ['Anna Schmidt', 'Johannes Müller'] }
  ];

  constructor() { }

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const codigo = this.livros.length > 0 ? Math.max(...this.livros.map(l => l.codigo || 0), 0) + 1 : 1;
    livro.codigo = codigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
