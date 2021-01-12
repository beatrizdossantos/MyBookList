import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Lista } from "../models/lista.model";
import { Livro } from '../models/livro.model';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page { 
  public lista: Lista;
  constructor(
    private alertController: AlertController
  ) {
    const livros: Livro[] = [
      new Livro('O Conto do Feiticeiro Maligno','Garça Mirigis')
    ];   
    this.lista = new Lista('Livros que quero ler', livros);
    this.save(this.lista);
    this.lista = this.get();
  }

  inserirLivro(livro: Livro) {
    this.save(this.lista);
  }

  deletarLivro(livro: Livro) {
    const id = this.lista.livros.indexOf(livro);
    this.lista.livros.splice(id, 1);
    this.save(this.lista);
  }

  //DataService
  public save(lista: Lista) {
    const data = JSON.stringify(lista);
    localStorage.setItem('lista', data);
  }

  public get(): Lista {
    const data = localStorage.getItem('lista');
    if (data)
      return JSON.parse(data);
    else
      return null;
  }

  async mostrarForm() {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Qual Livro quer ler?',
        inputs: [
          {
            name: 'titulo',
            type: 'text',
            placeholder: 'Insira o Título do Livro'
          },
          {
            name: 'autor',
            type: 'text',
            placeholder: 'Insira o Autor do Livro'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Ok',
            handler: (data) => {
              console.log(data);
              this.lista.livros.push(new Livro(data.titulo, data.autor));
              this.save(this.lista);
            }
          }
        ]
      });
  
      await alert.present();
    }
}



