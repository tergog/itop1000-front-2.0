import { Component, Input } from '@angular/core';

import { EUserCardView } from '../user-card.enums';
import { IUserDataState } from '../../../../reducers/user-data/user-data.interfaces';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  public role = localStorage.getItem('role');
  public EUserCardView = EUserCardView;
  public componentParameters: IUserDataState;
  @Input() set userCardParameters(value: IUserDataState) {
    this.componentParameters = value;
  }

  get userCardParameters(): IUserDataState {
    return this.componentParameters;
  }
}
