import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CPersonalRoomConfig } from '../personal-room.config';
import { UserDataService } from '../../services/user-data/user-data.service';
import { IUserDataState } from '../../reducers/user-data/user-data.interfaces';
import { EUserRole } from '../../enums/itop.enums';

@Component({
  selector: 'app-personal-room',
  templateUrl: './personal-room.component.html',
  styleUrls: ['./personal-room.component.scss']
})
export class PersonalRoomComponent implements OnInit {
  public personalRoomConfig = CPersonalRoomConfig;
  public role = localStorage.getItem('role') || EUserRole.Freelancer;
  public personalRoomData$: Observable<IUserDataState> = this.userDataService.userData$;

  constructor(private userDataService: UserDataService) {
  }

  ngOnInit(): void {
    this.userDataService.getUserData(this.role);
  }

}
