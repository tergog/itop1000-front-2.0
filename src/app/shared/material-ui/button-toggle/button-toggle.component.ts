import { Component, OnInit } from '@angular/core';
import { ItopDataService } from '../../../services/itop-data/itop-data.service';
import { ELandingRole } from '../../../landing/landing.enums';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent implements OnInit {

  constructor(
    private landingData: ItopDataService
  ) {
  }

  ngOnInit(): void {
  }

  setProductOwnerRole(): void {
    this.landingData.userRole$.next(ELandingRole.ProductOwner);
  }

  setFreelancerRole(): void {
    this.landingData.userRole$.next(ELandingRole.Freelancer);
  }

}
