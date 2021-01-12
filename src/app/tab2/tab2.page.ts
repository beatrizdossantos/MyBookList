import { Component } from '@angular/core';
import { Sugestoes } from "../models/sugestoes.model";
import { Sugestao } from '../models/sugestao.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public sugestoesLista: Sugestoes;
  constructor() {
    const sugestoes: Sugestao[] = [
      new Sugestao('A Maldição do Tigre','Colleen Houck','Romance e Aventura'),
      new Sugestao('Pegasus','Kate O Hearn','Mitologia Grega'),
      new Sugestao('Os Dragões do Éter','Raphael Draccon','Fantasia'),
      new Sugestao('Cemitério de Dragões','Raphael Draccon','Fantasia'),
      new Sugestao('Os Mercadores de Navios-Vivos','Robin Hobb','Fantasia'),
      new Sugestao('Fronteiras do Universo','Philip Pullman','Aventura e Fantasia'),
      new Sugestao('O Guia do Mochileiro das Galáxias','Douglas Adams','Ficção Científica'),
      new Sugestao('Estilhaça-me','Tahereh Mafis','Romance'),
      new Sugestao('Hush Hush','Becca Fitzpatrick','Sobrenatural e Romance'),
      new Sugestao('Crônicas do Matador de Reis','Patrick Rothfuss','Fantasia'),
      new Sugestao('As Crônicas do Kane','Rick Riordan','Mitologia Egípcia')
    ];   
    this.sugestoesLista = new Sugestoes('Sagas de livros que você pode gostar', sugestoes);
  }


}
