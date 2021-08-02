import { Component, Input } from '@angular/core';

import { IProjectCardParameters } from '../project-card.interfaces';
import { EProjectCardView } from '../project-card.enums';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  public EProjectCardView = EProjectCardView;
  public _projectCardParameters: IProjectCardParameters;
  @Input() set projectCardParameters(value: IProjectCardParameters) {
    this._projectCardParameters = value;
  }

  get projectCardParameters(): IProjectCardParameters {
    return this._projectCardParameters;
  }
}
