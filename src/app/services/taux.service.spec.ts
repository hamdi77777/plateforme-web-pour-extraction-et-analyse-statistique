import { TestBed } from '@angular/core/testing';

import { TauxService } from './taux.service';

describe('TauxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TauxService = TestBed.get(TauxService);
    expect(service).toBeTruthy();
  });
});
