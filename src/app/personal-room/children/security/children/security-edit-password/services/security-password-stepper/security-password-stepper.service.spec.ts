import { TestBed } from '@angular/core/testing';

import { SecurityPasswordStepperService } from './security-password-stepper.service';

describe('SecurityPasswordStepperService', () => {
  let service: SecurityPasswordStepperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecurityPasswordStepperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
