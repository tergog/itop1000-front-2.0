import { Component } from '@angular/core';
import { CHeaderConfigList } from '../header.config';
import { UserDataService } from '../../../services/user-data/user-data.service';
import { AuthorizationService } from '../../../authorization/services/authorization/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public headerConfig = CHeaderConfigList;
  public statusUser = localStorage.getItem('role') && localStorage.getItem('token');

  constructor(private authorizationDataService: AuthorizationService) {
  }

  logoutUser(): void {
    this.authorizationDataService.logout();
  }
}
