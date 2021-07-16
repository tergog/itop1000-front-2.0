import { Component, Input, OnInit } from '@angular/core';

import { INavigationParameters } from '../navigation.interfaces';
import { ENavigationView } from '../navigation.enums';
import { LandingDataService } from '../../../services/landing-data/landing-data.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public ENavigationView = ENavigationView;
  public _navigationParameters: INavigationParameters;
  @Input() set navigationParameters(value: INavigationParameters) {
    this._navigationParameters = value;
  }
  get navigationParameters(): INavigationParameters {
    return this._navigationParameters;
  }
  public landingRole$: BehaviorSubject<string>;

  constructor(private landingData: LandingDataService) {
    this.landingRole$ = landingData.landingRole$;
  }

  ngOnInit(): void {
  }

}
