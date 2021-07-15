import { Component, Input, OnInit } from '@angular/core';

import { IBenefitsParameters } from './benefits-card.interfaces';

@Component({
  selector: 'app-benefits-card',
  templateUrl: './benefits-card.component.html',
  styleUrls: ['./benefits-card.component.scss']
})
export class BenefitsCardComponent implements OnInit {
  public _benefitsCardParameters: IBenefitsParameters;
  @Input() set benefitsCardParameters(value: IBenefitsParameters) {
    this._benefitsCardParameters = value;
  }

  get benefitsCardParameters(): IBenefitsParameters {
    return this._benefitsCardParameters;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
