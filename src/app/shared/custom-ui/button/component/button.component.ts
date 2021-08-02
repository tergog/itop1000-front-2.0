import { Component, Input } from '@angular/core';

import { EButtonView } from '../button.enums';
import { IButtonParameters } from '../button.interfaces';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  public EButtonView = EButtonView;
  public _buttonParameters: IButtonParameters;
  @Input() set buttonParameters(value: IButtonParameters) {
    this._buttonParameters = value;
  }

  get buttonParameters(): IButtonParameters {
    return this._buttonParameters;
  }
}
