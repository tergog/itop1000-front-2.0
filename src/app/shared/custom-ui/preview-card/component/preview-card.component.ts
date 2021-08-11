import { Component, Input } from '@angular/core';

import { EPreviewCardView } from '../preview-card.enums';
import { IPreviewCardParameters } from '../preview-card.interfaces';

@Component({
  selector: 'app-preview-card',
  templateUrl: './preview-card.component.html',
  styleUrls: ['./preview-card.component.scss']
})
export class PreviewCardComponent {
  public EPreviewCardView = EPreviewCardView;
  public componentCardParameters: IPreviewCardParameters;
  @Input() set previewCardParameters(value: IPreviewCardParameters) {
    this.componentCardParameters = value;
  }

  get previewCardParameters(): IPreviewCardParameters {
    return this.componentCardParameters;
  }
}
