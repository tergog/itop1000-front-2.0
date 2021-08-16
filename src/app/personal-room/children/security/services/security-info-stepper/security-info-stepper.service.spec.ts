import { TestBed } from '@angular/core/testing';

import { SecurityInfoStepperService } from './security-info-stepper.service';

describe('SecurityInfoStepperService', () => {
  let service: SecurityInfoStepperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecurityInfoStepperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
