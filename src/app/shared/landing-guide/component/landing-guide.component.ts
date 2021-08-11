import { Component, Input } from '@angular/core';
import { ILandingGuideParameters } from '../landing-guide.interfaces';

@Component({
  selector: 'app-landing-guide',
  templateUrl: './landing-guide.component.html',
  styleUrls: ['./landing-guide.component.scss']
})
export class LandingGuideComponent {
  public componentParameters: ILandingGuideParameters[];
  @Input() set landingGuideParameters(value: ILandingGuideParameters[]) {
    this.componentParameters = value;
  }

  get landingGuideParameters(): ILandingGuideParameters[] {
    return this.componentParameters;
  }
}
