import { Component, Input } from '@angular/core';

import { IProjectCardParameters } from '../project-card.interfaces';
import { EProjectCardStatus } from '../project-card.enums';
import { CProjectCardConfigList } from '../project-card.config';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  public EProjectCardStatus = EProjectCardStatus;
  public projectCardConfig = CProjectCardConfigList;
  public componentParameters: IProjectCardParameters;

  @Input() set projectCardParameters(value: IProjectCardParameters) {
    this.componentParameters = value;
  }

  get projectCardParameters(): IProjectCardParameters {
    return this.componentParameters;
  }

  acceptProject(): void {
    this.projectCardParameters.status = EProjectCardStatus.Development;
  }

  closeProject(): void {
    this.projectCardParameters.status = EProjectCardStatus.Completed;
  }
}
