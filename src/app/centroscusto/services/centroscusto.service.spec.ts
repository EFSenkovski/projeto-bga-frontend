import { TestBed } from '@angular/core/testing';

import { CentroscustoService } from './centroscusto.service';

describe('CentroscustoService', () => {
  let service: CentroscustoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentroscustoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
