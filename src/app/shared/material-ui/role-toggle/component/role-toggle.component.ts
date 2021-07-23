import { Component, OnInit } from '@angular/core';

import { ItopDataService } from '../../../../services/itop-data/itop-data.service';
import { ELandingRole } from '../../../../landing/landing.enums';

@Component({
  selector: 'app-role-toggle',
  templateUrl: './role-toggle.component.html',
  styleUrls: ['./role-toggle.component.scss']
})
export class RoleToggleComponent implements OnInit {

  public EUserRole = ELandingRole;

  constructor(private landingData: ItopDataService) { }

  ngOnInit(): void {
  }

  setRole(value: string): void{
    this.landingData.userRole$.next(value);
  }
}
