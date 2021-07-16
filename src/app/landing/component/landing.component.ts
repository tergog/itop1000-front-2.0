import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ILandingData } from '../landing.interfaces';
import { ELandingRole } from '../landing.enums';
import { LandingDataService } from '../../services/landing-data/landing-data.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent implements OnInit {
  public landingData$: BehaviorSubject<ILandingData>;
  public ELandingRole = ELandingRole;

  constructor(private landingPageData: LandingDataService) {
    this.landingData$ = landingPageData.landingPageData$;
  }

  ngOnInit(): void {
  }

}
