import { TestBed } from '@angular/core/testing';

import { PonderationService } from './ponderation.service';

describe('PonderationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PonderationService = TestBed.get(PonderationService);
    expect(service).toBeTruthy();
  });
});
