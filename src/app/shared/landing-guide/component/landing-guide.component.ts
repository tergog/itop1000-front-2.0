import { Component, Input } from '@angular/core';
import { ILandingGuideParameters } from '../landing-guide.interfaces';

@Component({
  selector: 'app-landing-guide',
  templateUrl: './landing-guide.component.html',
  styleUrls: ['./landing-guide.component.scss']
})
export class LandingGuideComponent {
  public _landingGuideParameters: ILandingGuideParameters[];
  @Input() set landingGuideParameters(value: ILandingGuideParameters[]) {
    this._landingGuideParameters = value;
  }

  get landingGuideParameters(): ILandingGuideParameters[] {
    return this._landingGuideParameters;
  }
}
