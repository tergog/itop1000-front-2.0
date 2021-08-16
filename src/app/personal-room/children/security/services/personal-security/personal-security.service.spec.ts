import { TestBed } from '@angular/core/testing';

import { PersonalSecurityService } from './personal-security.service';

describe('PersonalSecurityService', () => {
  let service: PersonalSecurityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalSecurityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
