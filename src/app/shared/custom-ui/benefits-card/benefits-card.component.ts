import { Component, Input } from '@angular/core';

import { IBenefitsParameters } from './benefits-card.interfaces';

@Component({
  selector: 'app-benefits-card',
  templateUrl: './benefits-card.component.html',
  styleUrls: ['./benefits-card.component.scss']
})
export class BenefitsCardComponent {
  public componentParameters: IBenefitsParameters;
  @Input() set benefitsCardParameters(value: IBenefitsParameters) {
    this.componentParameters = value;
  }

  get benefitsCardParameters(): IBenefitsParameters {
    return this.componentParameters;
  }
}
