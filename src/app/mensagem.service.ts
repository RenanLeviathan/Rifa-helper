import { Injectable } from '@angular/core';
import { Numero } from './numero';

@Injectable({
  providedIn: 'root',
})
export class MensagemService {
  mensagens: string[] = [];
  order: string = '';
  numeros: string[] = [];

  add(mensagem: string) {
    this.mensagens.push(mensagem);
  }

  registrarNumeros(numero: Numero) {
    this.numeros.push(numero.numero);
  }

  registraCompra(nome: string, telefone: string) {
    let nums = 'Dados do pedido:\n--------------------\n';
    let total = this.numeros.length * 6.0; //total da compra
    for (let n of this.numeros) {
      nums = nums.concat(n, ' ');
    }
    this.order = this.order.concat(
      'Nome: ' + nome + ' Telefone: ' + telefone + '\nNúmeros: ' + nums
    );
    this.order = this.order.concat(
      '\n--------------------\nTotal: R$ ' + total
    );
    window.open(
      `http://api.whatsapp.com/send?1=pt_BR&phone=5511959668971&text=${this.order}`
    );
  }

  clear() {
    this.mensagens = [];
  }

  constructor() {}
}
