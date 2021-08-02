import { Component, Input } from '@angular/core';

import { IProjectCardParameters } from '../preview-project-card.interfaces';
import { EProjectCardView } from '../preview-project-card.enums';

@Component({
  selector: 'app-project-card',
  templateUrl: './preview-project-card.component.html',
  styleUrls: ['./preview-project-card.component.scss']
})
export class PreviewProjectCardComponent {
  public EProjectCardView = EProjectCardView;
  public _projectCardParameters: IProjectCardParameters;
  @Input() set projectCardParameters(value: IProjectCardParameters) {
    this._projectCardParameters = value;
  }

  get projectCardParameters(): IProjectCardParameters {
    return this._projectCardParameters;
  }
}
