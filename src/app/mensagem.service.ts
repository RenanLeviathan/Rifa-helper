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
    this.numeros.push(numero.toString());
  }

  registraCompra(nome: string, telefone: string) {
    let nums = '';
    for (let n of this.numeros) {
      nums.concat(n);
    }
    this.order.concat(
      'Nome: ' + nome + ' Telefone: ' + telefone + '\nNúmeros: ' + nums
    );
    window.open(
      `http://api.whatsapp.com/send?1=pt_BR&phone=5511959668971&text=Números selecionados: ${this.order}`
    );
  }

  clear() {
    this.mensagens = [];
  }

  constructor() {}
}
