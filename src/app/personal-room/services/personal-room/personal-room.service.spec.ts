import { TestBed } from '@angular/core/testing';

import { PersonalRoomService } from './personal-room.service';

describe('PersonalRoomService', () => {
  let service: PersonalRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
