import { TestBed } from '@angular/core/testing';

import { ComprasDataService } from './compras-data.service';

describe('ComprasDataService', () => {
  let service: ComprasDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComprasDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
