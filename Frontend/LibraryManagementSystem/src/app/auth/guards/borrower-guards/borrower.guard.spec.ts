import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { borrowerGuard } from './borrower.guard';

describe('borrowerGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => borrowerGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
