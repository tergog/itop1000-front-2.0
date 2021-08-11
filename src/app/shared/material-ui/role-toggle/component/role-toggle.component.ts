import { Component } from '@angular/core';

import { ELandingRole } from '../../../../landing/landing.enums';
import { ItopDataService } from '../../../../services/itop-data/itop-data.service';

@Component({
  selector: 'app-role-toggle',
  templateUrl: './role-toggle.component.html',
  styleUrls: ['./role-toggle.component.scss']
})
export class RoleToggleComponent {
  public EUserRole = ELandingRole;

  constructor(private itopDataService: ItopDataService) {
  }

  setRole(value: string): void{
    this.itopDataService.userRole$.next(value);
    localStorage.setItem('role', value);
  }
}
