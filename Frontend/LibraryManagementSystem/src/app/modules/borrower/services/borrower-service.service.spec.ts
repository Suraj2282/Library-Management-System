import { TestBed } from '@angular/core/testing';

import { BorrowerServiceService } from './borrower-service.service';

describe('BorrowerServiceService', () => {
  let service: BorrowerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorrowerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
