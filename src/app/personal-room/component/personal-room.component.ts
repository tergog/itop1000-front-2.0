import { Component, OnInit } from '@angular/core';

import { CPersonalRoomConfig } from '../personal-room.config';
import { UserDataService } from '../../services/user-data/user-data.service';

@Component({
  selector: 'app-personal-room',
  templateUrl: './personal-room.component.html',
  styleUrls: ['./personal-room.component.scss']
})
export class PersonalRoomComponent implements OnInit {
  public personalRoomConfig = CPersonalRoomConfig;

  role = 'freelancer';
  // role = 'product-owner';

  constructor(private userData: UserDataService) {
  }

  ngOnInit(): void {
    this.userData.getUserData(this.role);
  }

}
