import { Component, OnInit } from '@angular/core';
import { MensagemService } from '../mensagem.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rifa-input',
  templateUrl: './rifa-input.component.html',
  styleUrls: ['./rifa-input.component.scss'],
})
export class RifaInputComponent implements OnInit {
  nome = new FormControl('');
  telefone = new FormControl('');

  constructor(private mensagemService: MensagemService) {}

  ngOnInit(): void {}

  onSelect(nome: string, telefone: string) {
    this.mensagemService.registraCompra(nome, telefone);
  }
}
