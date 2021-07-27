import { TestBed } from '@angular/core/testing';

import { AuthorizationValidationService } from './authorization-validation.service';

describe('AuthorizationValidationService', () => {
  let service: AuthorizationValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizationValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
