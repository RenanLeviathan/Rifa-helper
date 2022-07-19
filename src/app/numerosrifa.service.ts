import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Numero } from './numero';
import { NUMS } from './numeros-rifa';
import { MensagemService } from './mensagem.service';

@Injectable({
  providedIn: 'root'
})
export class NumerosrifaService {
	
	getNums(): Observable<Numero[]> {
		const nums = of(NUMS);
		this.mensagemService.add('Números disponíveis carregados. Boa compra!!');
		return nums;
	}

	constructor(private mensagemService: MensagemService) { }
}
