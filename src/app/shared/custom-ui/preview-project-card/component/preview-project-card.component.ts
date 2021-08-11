import { Component, Input } from '@angular/core';

import { IPreviewProjectCardParameters } from '../preview-project-card.interfaces';
import { EPreviewProjectCardView } from '../preview-project-card.enums';

@Component({
  selector: 'app-preview-project-card',
  templateUrl: './preview-project-card.component.html',
  styleUrls: ['./preview-project-card.component.scss']
})
export class PreviewProjectCardComponent {
  public EPreviewProjectCardView = EPreviewProjectCardView;
  public componentParameters: IPreviewProjectCardParameters;
  @Input() set previewProjectCardParameters(value: IPreviewProjectCardParameters) {
    this.componentParameters = value;
  }

  get previewProjectCardParameters(): IPreviewProjectCardParameters {
    return this.componentParameters;
  }
}
