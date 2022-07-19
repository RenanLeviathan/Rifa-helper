import { Component, OnInit } from '@angular/core';
import { MensagemService } from '../mensagem.service';

@Component({
  selector: 'app-rifa-input',
  templateUrl: './rifa-input.component.html',
  styleUrls: ['./rifa-input.component.scss'],
})
export class RifaInputComponent implements OnInit {
  constructor(private mensagemService: MensagemService) {}

  ngOnInit(): void {}

  onSelect(nome: string, telefone: string) {
    this.mensagemService.registraCompra(nome, telefone);
  }
}
