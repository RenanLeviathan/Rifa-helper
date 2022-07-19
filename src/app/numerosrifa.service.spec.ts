import { TestBed } from '@angular/core/testing';

import { NumerosrifaService } from './numerosrifa.service';

describe('NumerosrifaService', () => {
  let service: NumerosrifaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumerosrifaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
