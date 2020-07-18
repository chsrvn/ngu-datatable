import { TestBed } from '@angular/core/testing';

import { NguDatatableService } from './ngu-datatable.service';

describe('NguDatatableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NguDatatableService = TestBed.get(NguDatatableService);
    expect(service).toBeTruthy();
  });
});
