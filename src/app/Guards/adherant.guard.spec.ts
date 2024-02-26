import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { adherantGuard } from './adherant.guard';

describe('adherantGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => adherantGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
