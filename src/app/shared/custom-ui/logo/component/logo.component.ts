import { Component, Input } from '@angular/core';

import { ELogoView } from '../logo.enums';
import { ILogoParameters } from '../logo.interfaces';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  public ELogoView = ELogoView;
  public componentParameters: ILogoParameters;
  @Input() set logoParameters(value: ILogoParameters) {
    this.componentParameters = value;
  }

  get logoParameters(): ILogoParameters {
    return this.componentParameters;
  }

  rotate(event: any): void{
    event.target.classList.add('rotate');
  }

}
