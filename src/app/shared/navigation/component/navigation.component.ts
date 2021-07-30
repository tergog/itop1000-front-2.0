import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { INavigationParameters } from '../navigation.interfaces';
import { ENavigationView } from '../navigation.enums';
import { ItopDataService } from '../../../services/itop-data/itop-data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  public ENavigationView = ENavigationView;
  public _navigationParameters: INavigationParameters;
  @Input() set navigationParameters(value: INavigationParameters) {
    this._navigationParameters = value;
  }

  get navigationParameters(): INavigationParameters {
    return this._navigationParameters;
  }

  public landingRole$: BehaviorSubject<string>;

  constructor(
    private landingData: ItopDataService
  ) {
    this.landingRole$ = landingData.userRole$;
  }
}
