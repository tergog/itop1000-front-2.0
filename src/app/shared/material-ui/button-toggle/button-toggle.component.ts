import { Component, OnInit } from '@angular/core';
import { LandingDataService } from '../../../services/landing-data/landing-data.service';
import { ELandingRole } from '../../../landing/landing.enums';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent implements OnInit {

  constructor(
    private landingData: LandingDataService
  ) {
  }

  ngOnInit(): void {
  }

  setProductOwnerRole(): void {
    this.landingData.landingRole$.next(ELandingRole.ProductOwner);
  }

  setFreelancerRole(): void {
    this.landingData.landingRole$.next(ELandingRole.Freelancer);
  }

}
