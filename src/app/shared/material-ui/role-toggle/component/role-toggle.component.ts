import { Component } from '@angular/core';

import { ItopDataService } from '../../../../services/itop-data/itop-data.service';
import { ELandingRole } from '../../../../landing/landing.enums';

@Component({
  selector: 'app-role-toggle',
  templateUrl: './role-toggle.component.html',
  styleUrls: ['./role-toggle.component.scss']
})
export class RoleToggleComponent {

  public EUserRole = ELandingRole;

  constructor(private landingData: ItopDataService) { }

  setRole(value: string): void{
    this.landingData.userRole$.next(value);
  }
}
