import { Component, Input } from '@angular/core';

import { INavigationParameters } from '../navigation.interfaces';
import { ENavigationView } from '../navigation.enums';
import { EUserRole } from '../../../enums/itop.enums';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  public ENavigationView = ENavigationView;
  public componentParameters: INavigationParameters;
  @Input() set navigationParameters(value: INavigationParameters) {
    this.componentParameters = value;
  }

  get navigationParameters(): INavigationParameters {
    return this.componentParameters;
  }

  public landingRole: string = localStorage.getItem('role') || EUserRole.Freelancer;
}
