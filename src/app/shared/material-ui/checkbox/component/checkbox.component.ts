import { Component, Input, OnInit } from '@angular/core';

import { ICheckboxParameters } from '../checkbox.interfaces';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  checked = false;
  disabled = false;
  public _checkboxParameters: ICheckboxParameters;
  @Input() set checkboxParameters(value: ICheckboxParameters) {
    this._checkboxParameters = value;
  }

  get checkboxParameters(): ICheckboxParameters {
    return this._checkboxParameters;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
