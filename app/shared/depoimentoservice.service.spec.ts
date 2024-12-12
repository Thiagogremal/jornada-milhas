import { TestBed } from '@angular/core/testing';

import { DepoimentoserviceService } from './shared/depoimentos/depoimentoservice.service';

describe('DepoimentoserviceService', () => {
  let service: DepoimentoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepoimentoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
