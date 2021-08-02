import { Component, Input } from '@angular/core';

import { EUserCardView } from '../user-card.enums';
import { IUserCardParameters } from '../user-card.interfaces';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  public EUserCardView = EUserCardView;
  public componentParameters: IUserCardParameters;
  @Input() set userCardParameters(value: IUserCardParameters) {
    this.componentParameters = value;
  }

  get userCardParameters(): IUserCardParameters {
    return this.componentParameters;
  }
}
