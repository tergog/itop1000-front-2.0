import { Component } from '@angular/core';

import { ELandingRole } from '../../../landing/landing.enums';
import { ItopDataService } from '../../../services/itop-data/itop-data.service';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent {

  constructor(private itopDataService: ItopDataService) {
  }

  setProductOwnerRole(): void {
    this.itopDataService.userRole$.next(ELandingRole.ProductOwner);
    localStorage.setItem('role', ELandingRole.ProductOwner);
  }

  setFreelancerRole(): void {
    this.itopDataService.userRole$.next(ELandingRole.Freelancer);
    localStorage.setItem('role', ELandingRole.Freelancer);
  }
}
