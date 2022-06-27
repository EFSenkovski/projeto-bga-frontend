import { TestBed } from '@angular/core/testing';

import { CaixasService } from './caixas.service';

describe('CaixasService', () => {
  let service: CaixasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaixasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
