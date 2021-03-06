import { Component, Input, OnInit } from '@angular/core';

import { ELogoView } from './logo.enums';
import { ILogoParameters } from './logo.interfaces';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  public ELogoView = ELogoView;
  public _logoParameters: ILogoParameters;
  @Input() set logoParameters(value: ILogoParameters) {
    this._logoParameters = value;
  }

  get logoParameters(): ILogoParameters {
    return this._logoParameters;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
