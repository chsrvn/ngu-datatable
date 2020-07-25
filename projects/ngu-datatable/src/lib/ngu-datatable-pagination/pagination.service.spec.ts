import { TestBed } from '@angular/core/testing';

import { NguDatatablePaginationService } from './pagination.service';

describe('PaginationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NguDatatablePaginationService = TestBed.get(NguDatatablePaginationService);
    expect(service).toBeTruthy();
  });
});
