import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CSecurityConfigList } from '../../../security.config';
import { IUserDataSecure } from '../../../../../../services/user-data/user-data.interfaces';
import { IUserDataState } from '../../../../../../reducers/user-data/user-data.interfaces';
import { UserDataService } from '../../../../../../services/user-data/user-data.service';

@Component({
  selector: 'app-security-main',
  templateUrl: './security-main.component.html',
  styleUrls: ['./security-main.component.scss']
})
export class SecurityMainComponent implements OnInit {
  public securityConfig = CSecurityConfigList;
  public secureData$: Observable<IUserDataSecure> = this.userDataService.getFreelancerSecureData();
  public personalData$: Observable<IUserDataState> = this.userDataService.userData;

  constructor(private userDataService: UserDataService) {
  }

  ngOnInit(): void {
  }

  getAge(birth: number): any {
    const nowDate = new Date().getFullYear();
    const birthDate = new Date(birth).getFullYear();
    return nowDate - birthDate;
  }
}
