import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ILandingData } from '../landing.interfaces';
import { ELandingRole } from '../landing.enums';
import { ItopDataService } from '../../services/itop-data/itop-data.service';
import { animateText } from 'src/app/animations/animations'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [animateText]
})
export class LandingComponent implements OnInit {
  public landingData$: BehaviorSubject<ILandingData>;
  public ELandingRole = ELandingRole;

  constructor(private landingPageData: ItopDataService) {
    this.landingData$ = landingPageData.landingPageData$;
  }

  ngOnInit(): void {
  }

}
