import { AfterContentChecked, AfterViewChecked, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ILandingData } from '../landing.interfaces';
import { ELandingRole } from '../landing.enums';
import { ItopDataService } from '../../services/itop-data/itop-data.service';
import { animateText } from 'src/app/animations/animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [animateText]
})
export class LandingComponent implements OnInit, AfterViewChecked {
  public landingData$: BehaviorSubject<ILandingData>;
  public ELandingRole = ELandingRole;
  // public loader;

  constructor(private landingPageData: ItopDataService) {
    this.landingData$ = landingPageData.landingPageData$;
    // this.loader = true;
  }

  ngOnInit(): void {

  }

  ngAfterViewChecked(): void {
    // this.loader = false;
  }

}
