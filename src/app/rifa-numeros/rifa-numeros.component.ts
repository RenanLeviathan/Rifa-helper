import { Component, OnInit } from '@angular/core';
import { Numero } from '../numero';
import { NumerosrifaService } from '../numerosrifa.service';
import { MensagemService } from '../mensagem.service';

@Component({
  selector: 'app-rifa-numeros',
  templateUrl: './rifa-numeros.component.html',
  styleUrls: ['./rifa-numeros.component.scss']
})
export class RifaNumerosComponent implements OnInit {
	
	constructor(private numerosrifaService: NumerosrifaService, private mensagemService: MensagemService) { }

	nums: Numero[] = [];
	numeroSelecionado?: Numero; //número selecionado de Schrödinger

	getNums(): void{
		this.numerosrifaService.getNums()
		.subscribe(nums => this.nums = nums);
	}

	ngOnInit(): void {
	  this.getNums();
	}

	onSelect(numero: Numero): void{
	  this.numeroSelecionado = numero;
	  this.mensagemService.add(`Número selecionado: ${numero.numero}`);
	}

}
