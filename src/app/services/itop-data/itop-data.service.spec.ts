import { TestBed } from '@angular/core/testing';

import { ItopDataService } from './itop-data.service';

describe('LandingDataService', () => {
  let service: ItopDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItopDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
