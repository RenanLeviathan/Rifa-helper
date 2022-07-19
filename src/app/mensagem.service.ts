import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MensagemService {
  mensagens: string[] = [];
  order: string;

  add(mensagem: string) {
    this.mensagens.push(mensagem);
  }

  registraCompra(nome: string, telefone: string) {
    this.order.concat(
      'Nome: ' +
        nome +
        ' Telefone: ' +
        telefone +
        '\nNúmeros: ' +
        this.mensagens
    );
    let count = this.mensagens.length * 6.0;
    window.open(
      `http://api.whatsapp.com/send?1=pt_BR&phone=5511959668971&text=${this.mensagens}\nTotal: R$ ${count}`
    );
  }

  clear() {
    this.mensagens = [];
  }

  constructor() {}
}
