import { TestBed } from '@angular/core/testing';

import { RbaGuard } from './rba.guard';

describe('RbaGuard', () => {
  let guard: RbaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RbaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
