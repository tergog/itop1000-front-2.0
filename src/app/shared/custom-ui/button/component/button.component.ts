import { Component, Input, OnInit } from '@angular/core';

import { EButtonView } from '../button.enums';
import { IButtonParameters } from '../button.interfaces';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  EButtonView = EButtonView;
  _buttonParameters: IButtonParameters;
  @Input() set buttonParameters(value: IButtonParameters) {
    this._buttonParameters = value;
  }

  get buttonParameters(): IButtonParameters {
    return this._buttonParameters;
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}
